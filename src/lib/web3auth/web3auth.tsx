"use client";

import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  IProvider,
  WALLET_ADAPTERS,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import {
  OpenloginAdapter,
  OpenloginLoginParams,
} from "@web3auth/openlogin-adapter";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";
import Web3 from "web3";


const firebaseConfig = {
  
};

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xaa36a7",
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  displayName: "Ethereum Sepolia",
  blockExplorerUrl: "https://sepolia.etherscan.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
};

const web3authConfig = {
  clientId:
    "BKT4xfkIAQ8aIFm-f2mh_HgXQt0NpVJJRL1ivU2JUK7lNXY6uHVahZRbKsOWz6Eo1e8h3LxT7LNenJj2ArpVXTA",
  web3AuthNetwork: "sapphire_devnet",
  chainConfig,
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: web3authConfig.chainConfig },
});

const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    uxMode: "redirect",
    loginConfig: {
      jwt: {
        verifier: "web3edu-verifier",
        typeOfLogin: "jwt",
        clientId: web3authConfig.clientId,
      },
    },
  },
  privateKeyProvider,
});

const web3auth = new Web3AuthNoModal({
  clientId: web3authConfig.clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  chainConfig: web3authConfig.chainConfig,
  uiConfig: {
    logoLight:
      "https://github.com/Web3EduBrasil/web3edu-app/blob/main/src/assets/images/Web3EduBrasil_logo.png?raw=true",
    logoDark:
      "https://github.com/Web3EduBrasil/web3edu-app/blob/main/src/assets/images/Web3EduBrasil_logo.png?raw=true",
    defaultLanguage: "pt",
  },
});

web3auth.configureAdapter(openloginAdapter);

const walletPlugin = new WalletServicesPlugin({
  walletInitOptions: {
    confirmationStrategy: "modal",
    whiteLabel: {
      logoLight: "https://images.web3auth.io/web3auth-logo-w.svg",
      logoDark: "https://images.web3auth.io/web3auth-logo-w-light.svg",
      useLogoLoader: false,
      defaultLanguage: "pt",
    },
  },
});

export default function useWeb3Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [userInfo, setUserInfo] =
    useState<Partial<OpenloginLoginParams> | null>(null);
  const [userAccount, setAccounts] = useState<string[]>([]);
  const [walletServicesPlugin, setWalletServicesPlugin] =
    useState<WalletServicesPlugin | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.addPlugin(walletPlugin);
        await web3auth.init();
        setProvider(web3auth.provider);
        setWalletServicesPlugin(walletPlugin);

        if (web3auth.status === ADAPTER_EVENTS.CONNECTED) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);
  const signInWithGoogle = async (): Promise<UserCredential> => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleProvider);
      return res; // Retorna o ID token diretamente
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const login = async () => {
    try {
      debugger;
      if (!web3auth) {
        console.log("web3auth initialised yet");
        return;
      }
      setIsLoggingIn(true);
      const loginRes = await signInWithGoogle();
      const idToken = await loginRes.user.getIdToken(true);

      const web3authProvider = await web3auth.connectTo(
        WALLET_ADAPTERS.OPENLOGIN,
        {
          loginProvider: "jwt",
          extraLoginOptions: {
            id_token: idToken,
            verifierIdField: "email",
          },
        }
      );

      if (web3authProvider) {
        setIsLoggingIn(false);
        setIsLoggedIn(true);
        setProvider(web3authProvider);
        const web3 = new Web3(provider as any);
        const address = await web3.eth.getAccounts();
        setAccounts(address);
        const userInfo = await web3auth.getUserInfo();
        setUserInfo(userInfo);
        console.log(userInfo)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const WalletUi = async () => {
    await walletServicesPlugin?.showWalletUi();
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    logout,
    login,
    WalletUi,
    isLoggedIn,
    isLoggingIn,
    userInfo,
    userAccount,
  };
}
