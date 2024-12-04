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
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";
import Web3 from "web3";
import { useRouter } from "next/navigation";
import { app } from "@/firebase/config";

// Configuração do Web3Auth e da Chain
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
  clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
  web3AuthNetwork: "sapphire_devnet",
  chainConfig,
};

const openloginAdapter = new OpenloginAdapter({
  adapterSettings: {
    uxMode: "redirect",
    loginConfig: {
      jwt: {
        verifier: process.env.NEXT_PUBLIC_WEB3AUTH_VERIFIER || "",
        typeOfLogin: "jwt",
        clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "",
      },
    },
  },
  privateKeyProvider: new EthereumPrivateKeyProvider({
    config: { chainConfig },
  }),
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
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [userInfo, setUserInfo] =
    useState<Partial<OpenloginLoginParams> | null>(null);
  const [googleUserInfo, setGoogleUserInfo] = useState<any | null>(null);
  const [userAccount, setAccounts] = useState<string[]>([]);
  const [userDbInfo, setUserDbInfo] = useState({});
  const [walletServicesPlugin, setWalletServicesPlugin] =
    useState<WalletServicesPlugin | null>(null);

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedLoggedIn === "true");
  }, []);
  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.addPlugin(walletPlugin);
        await web3auth.init();
        setProvider(web3auth.provider);
        setWalletServicesPlugin(walletPlugin);

        if (web3auth.status === ADAPTER_EVENTS.CONNECTED) {
          setIsLoggedIn(true);
          const userInfo = await web3auth.getUserInfo();
          setUserInfo(userInfo);

          const web3 = new Web3(web3auth.provider as any);
          const addresses = await web3.eth.getAccounts();
          setAccounts(addresses.length > 0 ? addresses : []);
        }

        const storedGoogleUserInfo = localStorage.getItem("googleUserInfo");
        if (storedGoogleUserInfo)
          setGoogleUserInfo(JSON.parse(storedGoogleUserInfo));
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    // Salva o estado de login no localStorage sempre que ele muda
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    if (!web3auth) return;

    const handleConnectionChange = () => {
      setIsLoggedIn(web3auth.status === ADAPTER_EVENTS.CONNECTED);
      if (web3auth.status !== ADAPTER_EVENTS.CONNECTED) {
        router.push("/");
      }
    };

    web3auth.on(ADAPTER_EVENTS.CONNECTED, handleConnectionChange);
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, handleConnectionChange);

    return () => {
      web3auth.off(ADAPTER_EVENTS.CONNECTED, handleConnectionChange);
      web3auth.off(ADAPTER_EVENTS.DISCONNECTED, handleConnectionChange);
    };
  }, [web3auth]);

  const fetchUserDbData = async (uid: string) => {
    const response = await fetch(`/api/user?uid=${uid}`, {
      method: "GET",
    });
    const data = await response.json();
    setUserDbInfo(data.user);
    console.log(data);
  };

  useEffect(() => {
    const auth = getAuth(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);

        fetchUserDbData(user.uid);

        try {
          const userObj = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            tutorialDone: false,
            createdAt: new Date(),
          };
          const response = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify(userObj),
          });
          const data = await response.json();
          console.log(data);
        } catch (error: any) {
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("erro teste", error);
        }
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const signInWithGoogle = async (): Promise<UserCredential> => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleProvider);
    localStorage.setItem("googleUserInfo", JSON.stringify(res.user));
    return res;
  };

  const login = async () => {
    try {
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
        setProvider(web3authProvider);
        const web3 = new Web3(web3authProvider as any);
        const addresses = await web3.eth.getAccounts();
        setAccounts(addresses.length > 0 ? addresses : []);

        const userInfo = await web3auth.getUserInfo();
        setUserInfo(userInfo);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const logout = async () => {
    try {
      if (web3auth.status === ADAPTER_EVENTS.CONNECTED) await web3auth.logout();
      await signOut(getAuth(app));
      setProvider(null);
      setIsLoggedIn(false);
      setAccounts([]);
      localStorage.removeItem("googleUserInfo");
      router.push("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const WalletUi = async () => {
    try {
      await walletServicesPlugin?.showWalletUi();
    } catch (error) {
      console.error("error while displaying the wallet: ", error);
    }
  };

  return {
    logout,
    login,
    isLoggedIn,
    isLoggingIn,
    WalletUi,
    userInfo,
    userAccount,
    userDbInfo,
    setUserDbInfo,
    fetchUserDbData,
    googleUserInfo,
  };
}
