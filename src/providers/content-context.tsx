"use client";

import React, { createContext, useState, useContext } from "react";

interface ContentState {
  trailsList: any;
  fetchTrailsList: () => void;
  fetchTrail: (trailId: string) => Object;
  fetchTrailSections: (trailId: string) => Object;
}

const ContentContext = createContext<ContentState>({
  trailsList: [],
  fetchTrailsList: () => {},
  fetchTrail: () => ({}),
  fetchTrailSections: () => ({}),
});

export const ContentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trailsList, setTrailsList] = useState<any>([]);

  const fetchTrailsList = async () => {
    try {
      const response = await fetch("/api/trails", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setTrailsList(data.trails);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchTrail = async (trailId: string) => {
    try {
      const response = await fetch(`/api/trail?trailId=${trailId}`, {
        method: "GET",
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Erro ao buscar trilha";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Erro na requisição fetchTrail:", error);
      throw error;
    }
  };

  const fetchTrailSections = async (trailId: string) => {
    try {
      const response = await fetch(`/api/trail/contents?trailId=${trailId}`, {
        method: "GET",
      });
      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Erro ao buscar secoes da trilha";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error("Erro na requisição fetchTrailSections:", error);
      throw error;
    }
  };
  return (
    <ContentContext.Provider
      value={{ fetchTrailsList, trailsList, fetchTrail, fetchTrailSections }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
