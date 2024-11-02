"use client";

import React, { createContext, useState, useContext } from "react";

interface ContentState {
  trailsList: any;
  fetchTrailsList: () => void;
}

const ContentContext = createContext<ContentState>({
  trailsList: [],
  fetchTrailsList: () => {},
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
  return (
    <ContentContext.Provider value={{ fetchTrailsList, trailsList }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
