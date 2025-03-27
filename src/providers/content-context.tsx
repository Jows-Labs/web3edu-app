"use client";

import React, { createContext, useState, useContext } from "react";
import { MdQuestionMark } from "react-icons/md";

interface ContentState {
  trailsList: any;
  programsList: any;
  trail: any;
  trailSections: any;
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
  fetchTrailsList: () => {},
  fetchProgramsList: () => {},
  fetchTrail: () => ({}),
  fetchTrailSections: () => ({}),
  fetchTrailAirDrop: () => ({}),
  fetchAiAnswerCheck: () => Promise.resolve({ explicacao: "", valido: false }),
  fetchSectionContent: () => ({}),
  handleRewardContainer: () => {},
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
  const [rewardContainerVisibility, setRewardContainerVisibility] =
    useState(false);
  const [trail, setTrail] = useState<any>({});

  const handleRewardContainer = async () => {
    setRewardContainerVisibility(!rewardContainerVisibility);
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
      const obj = await JSON.parse(data.message.content);
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
      const response1 = await fetch(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzYjk4ZDFmMi03YzcxLTQzNDAtOTZiMi03OTE4ZjZjY2QxYTQiLCJlbWFpbCI6InBlZHJvY29lbGhvLm5hc2NpbWVudG9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQwNmM2OGJkODlmZjMyOTI3YTJmIiwic2NvcGVkS2V5U2VjcmV0IjoiMzkzOTI3N2FkNWU0NjdjN2I1ZjQ1ZjIzYzAwNDFhN2I5MDE0MzY2N2YxZjIxN2UzNWE0ZDE5YWIwZWY1YzlkZCIsImV4cCI6MTc2MjkxNTA3Mn0.bKLfcn9AJA7ML1m9MIWySw7JmMGRfYAIAGU_c7oxFP4",
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
