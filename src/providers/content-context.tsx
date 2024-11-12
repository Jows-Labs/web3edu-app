"use client";

import React, { createContext, useState, useContext } from "react";

interface ContentState {
  trailsList: any;
  trail: any;
  trailSections: any;
  fetchTrailsList: (uid: string) => void;
  fetchTrail: (trailIdRt: string) => Object;
  fetchTrailSections: (trailIdRt: string, uid: string) => Object;
  rewardContainerVisibility: any;
  handleRewardContainer: () => void;
  fetchSectionContent: (
    trailId: string,
    sectionId: string,
    uid: string
  ) => Object;
}

const ContentContext = createContext<ContentState>({
  trail: {},
  trailsList: [],
  trailSections: {},
  fetchTrailsList: () => {},
  fetchTrail: () => ({}),
  fetchTrailSections: () => ({}),
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
      setTrailSections(data);
      console.log(uid);
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

  return (
    <ContentContext.Provider
      value={{
        trail,
        fetchTrailsList,
        handleRewardContainer,
        rewardContainerVisibility,
        trailsList,
        fetchTrail,
        fetchTrailSections,
        fetchSectionContent,
        trailSections,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
