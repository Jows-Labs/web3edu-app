"use client";

import React, { createContext, useContext, ReactNode } from "react";
import useWeb3Auth from "./web3auth";
// import { web3authConfig } from "./web3auth.config";

interface Web3AuthContextProps {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  WalletUi: () => Promise<void>;
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  userInfo: Partial<any> | null;
  userAccount: string[];
  googleUserInfo: any | null;
}

const Web3AuthContext = createContext<Web3AuthContextProps | undefined>(
  undefined
);

export const Web3AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    login,
    logout,
    WalletUi,
    isLoggedIn,
    isLoggingIn,
    userInfo,
    userAccount,
    googleUserInfo,
  } = useWeb3Auth();

  return (
    <Web3AuthContext.Provider
      value={{
        login,
        logout,
        WalletUi,
        isLoggedIn,
        isLoggingIn,
        userInfo,
        userAccount,
        googleUserInfo,
      }}
    >
      {children}
    </Web3AuthContext.Provider>
  );
};

export const useWeb3AuthContext = () => {
  const context = useContext(Web3AuthContext);
  if (context === undefined) {
    throw new Error(
      "useWeb3AuthContext must be used within a Web3AuthProvider"
    );
  }
  return context;
};
