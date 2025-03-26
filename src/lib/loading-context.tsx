"use client";

import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  progressLoading: number | null;
  setProgressLoading: (progress: number | null) => void;
  countLoading: number[] | null;
  setCountLoading: (count: number[] | null) => void;
}>({
  isLoading: true,
  setIsLoading: () => {},
  progressLoading: null,
  setProgressLoading: () => {},
  countLoading: null,
  setCountLoading: () => {},
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progressLoading, setProgressLoading] = useState<number | null>(null);
  const [countLoading, setCountLoading] = useState<number[] | null>(null);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        progressLoading,
        setProgressLoading,
        countLoading,
        setCountLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
