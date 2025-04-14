"use client";

import React, { createContext, useState, useContext } from "react";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { toast } from "react-toastify";

interface ContentState {
  trailsList: any;
  programsList: any;
  trail: any;
  trailSections: any;
  achievedNfts: AchievedNft[];
  fetchAchievedNfts: (uid: string) => void;
  fetchTrailsList: (uid: string) => void;
  fetchProgramsList: () => void;
  fetchTrail: (trailIdRt: string) => any;
  fetchTrailSections: (trailIdRt: string, uid: string) => Object;
  fetchTrailAirDrop: (
    trailIcon: string,
    uid: string,
    userName: string,
    walletAddress: string,
    trailId: string,
    trailName: string
  ) => Object;
  rewardContainerVisibility: any;
  handleRewardContainer: () => void;
  fetchAiAnswerCheck: (
    question: string,
    prompt: string
  ) => Promise<AiAnswerProps>;
  fetchSectionContent: (
    trailId: string,
    sectionId: string,
    uid: string
  ) => Object;
}

interface AiAnswerProps {
  explicacao: string;
  valido: boolean;
}

const ContentContext = createContext<ContentState>({
  trail: {},
  trailsList: [],
  programsList: [],
  trailSections: {},
  achievedNfts: [],
  fetchTrailsList: () => { },
  fetchAchievedNfts: () => { },
  fetchProgramsList: () => { },
  fetchTrail: () => ({}),
  fetchTrailSections: () => ({}),
  fetchTrailAirDrop: () => ({}),
  fetchAiAnswerCheck: () => Promise.resolve({ explicacao: "", valido: false }),
  fetchSectionContent: () => ({}),
  handleRewardContainer: () => { },
  rewardContainerVisibility: {},
});

export const ContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trailsList, setTrailsList] = useState<any>([]);
  const [programsList, setProgramsList] = useState<any>([]);
  const [trailSections, setTrailSections] = useState<any[]>([]);
  const [achievedNfts, setAchievedNfts] = useState<AchievedNft[]>([]);
  const [rewardContainerVisibility, setRewardContainerVisibility] =
    useState(false);
  const [trail, setTrail] = useState<any>({});

  const handleRewardContainer = async () => {
    setRewardContainerVisibility(!rewardContainerVisibility);
  };

  const fetchAchievedNfts = async (walletAddress: string) => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' },
    };

    const url = `https://eth-sepolia.g.alchemy.com/nft/v3/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}/getNFTsForOwner?owner=${walletAddress}&contractAddresses[]=0x8984b78F102f85222E7fa9c43d37d84E087B1Be8&withMetadata=true&orderBy=transferTime&pageSize=100`;

    try {
      const res = await fetch(url, options);
      console.log(res);
      const data = await res.json();

      const formattedNfts: AchievedNft[] = data.ownedNfts.map((nft: any) => {
        const trailId = extractTrailName(nft.description);
        const contractAddress = nft.contract?.address;
        const tokenId = nft.tokenId;
        const openseaUrl = `https://testnets.opensea.io/assets/sepolia/${contractAddress}/${tokenId}`;
        
        return {
          walletAddress,
          trailId,
          ipfs: nft.raw.metadata?.image || nft.image.originalUrl || '',
          createdAt: new Date(nft.timeLastUpdated),
          openseaUrl,
        };
      });

      setAchievedNfts(formattedNfts);
    } catch (error) {
      console.error("Erro ao buscar NFTs conquistados:", error);
    }
  };

  // Função para extrair só o <nome> da trilha
  function extractTrailName(description: string): string {
    if (!description) return 'desconhecido';
    const match = description.match(/trilha de aprendizagem\s(.+)$/i);
    return match ? match[1].trim() : 'desconhecido';
  }

  const fetchTrailsList = async (uid: string) => {
    try {
      const response = await fetch(`/api/trails?uid=${uid}`, {
        method: "GET",
      });
      const data = await response.json();
      setTrailsList(data.trails);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchProgramsList = async () => {
    try {
      const response = await fetch("/api/programs", {
        method: "GET",
      });
      const data = await response.json();
      setProgramsList(data.programs);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchTrail = async (trailIdRt: string) => {
    try {
      const response = await fetch(`/api/trail?trailId=${trailIdRt}`, {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Erro ao buscar trilha";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setTrail(data);
    } catch (error: any) {
      console.error("Erro na requisição fetchTrail:", error);
      throw error;
    }
  };

  const fetchTrailSections = async (trailIdRt: string, uid: string) => {
    try {
      const response = await fetch(
        `/api/trail/contents?trailId=${trailIdRt}&uid=${uid}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Erro ao buscar secoes da trilha";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      data.sort(
        (a: { id: any }, b: { id: any }) => Number(a.id) - Number(b.id)
      );
      setTrailSections(data);
    } catch (error: any) {
      console.error("Erro na requisição fetchTrailSections:", error);
      throw error;
    }
  };

  const fetchSectionContent = async (
    trailId: string,
    sectionId: string,
    uid: string
  ) => {
    try {
      const response = await fetch(
        `/api/trail/contents/section?trailId=${trailId}&sectionId=${sectionId}&uid=${uid}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Erro ao buscar conteudo da secao";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Erro na requisição fetchSectionContent:", error);
      throw error;
    }
  };

  const fetchAiAnswerCheck = async (
    question: string,
    prompt: string
  ): Promise<AiAnswerProps> => {
    try {
      console.log(question, prompt);
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
          prompt: prompt,
        }),
      });
      const data = await response.json();
      console.log(data);
      const bodyString = data.body;
      const jsonString = bodyString.replace(/`json|`/g, "").trim();
      try {
        const obj = JSON.parse(jsonString);
        return {
          explicacao: obj.explicacao,
          valido: obj.valido,
        };
      } catch (parseError) {
        console.error("Erro ao fazer parse do JSON:", parseError);
        throw new Error("Formato de resposta inválido da API");
      }
    } catch (error: any) {
      console.error(error);
      throw error;
    }
  };

  const fetchTrailAirDrop = async (
    trailIcon: string,
    uid: string,
    userName: string,
    walletAddress: string,
    trailId: string,
    trailName: string
  ) => {
    try {
      console.log(uid, trailId);
      const checkEligibilityResponse = await fetch(
        `/api/whitelist?uid=${uid}&trailId=${trailId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const checkEligibilityData = await checkEligibilityResponse.json();
      const { eligible } = checkEligibilityData;
      console.log(checkEligibilityData);
      if (eligible === false) {
        console.error("Usuário não é elegível para receber o NFT");
        return toast.error("Usuário não é elegível para receber o NFT");
      }

      const response1 = await fetch(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pinataContent: {
              image: trailIcon,
              description: `Este certificado é concedido a ${userName} em reconhecimento por completar com sucesso a trilha de aprendizagem ${trailName}`,
            },
          }),
        }
      );

      const data = await response1.json();
      const IpfsHash = data.IpfsHash;
      console.log(IpfsHash);

      if (IpfsHash !== undefined) {
        const response2 = await fetch("/api/whitelist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: uid,
            walletAddress: walletAddress,
            trailId: trailId,
            ipfsHash: IpfsHash,
          }),
        });
        console.log(walletAddress, trailId, trailIcon);

        if (response2.ok) {
          const db = getFirestore();
          const userRef = doc(db, "users", uid);
          const achievedNftsRef = collection(userRef, "achievedNfts");

          await addDoc(achievedNftsRef, {
            walletAddress,
            trailId,
            ipfs: trailIcon,
            createdAt: serverTimestamp(),
          });
        }

        const data2 = await response2.json();
        console.log(data2);
      } else {
        console.error("Erro: IpfsHash não definido");
      }
    } catch (error: any) {
      console.error("Erro na requisição fetchTrailAirDrop:", error);
      throw error;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        trail,
        fetchTrailsList,
        handleRewardContainer,
        rewardContainerVisibility,
        trailsList,
        programsList,
        achievedNfts,
        fetchAchievedNfts,
        fetchProgramsList,
        fetchTrail,
        fetchTrailAirDrop,
        fetchTrailSections,
        fetchAiAnswerCheck,
        fetchSectionContent,
        trailSections,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
