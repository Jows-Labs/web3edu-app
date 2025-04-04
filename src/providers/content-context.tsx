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

  const fetchAchievedNfts = async (uid: string) => {
    try {
      const userRef = doc(db, "users", uid);
      const achievedNftsRef = collection(userRef, "achievedNfts");
      const snapshot = await getDocs(achievedNftsRef);
      setAchievedNfts(snapshot.docs.map((doc) => doc.data() as AchievedNft));
    } catch (error: any) {
      console.error("Erro ao buscar NFTs conquistados:", error);
    }
  };

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
      const obj = await JSON.parse(data.body.content);
      return {
        explicacao: obj.explicacao,
        valido: obj.valido,
      };
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
      const checkElegibilityResponse = await fetch(
        `/api/whitelist?uid=${uid}&trailId=${trailId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const checkElegibilityData = await checkElegibilityResponse.json();
      const { eligible } = checkElegibilityData;
      if (eligible === false) {
        console.error("Usuário não é elegível para receber o NFT");
        return toast.error("Usuário não é elegível para receber o NFT");
      }

      const response1 = await fetch(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          method: "POST",
          headers: {
            Authorization:
              `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
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
