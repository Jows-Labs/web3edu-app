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
  signOut,
  UserCredential,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";
import Web3 from "web3";
import { useRouter } from "next/navigation";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAweASg4o2u9YaansDheJbeHj-fVMyhO2s",
  authDomain: "web3edubrasil-app.firebaseapp.com",
  projectId: "web3edubrasil-app",
  storageBucket: "web3edubrasil-app.appspot.com",
  messagingSenderId: "110456521844",
  appId: "1:110456521844:web:b66fdbba75c2c68577bd21",
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
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [userInfo, setUserInfo] =
    useState<Partial<OpenloginLoginParams> | null>(null);
  const [googleUserInfo, setGoogleUserInfo] = useState<any | null>(null);
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
          // O usuário está conectado
          setIsLoggedIn(true);
          const userInfo = await web3auth.getUserInfo();
          setUserInfo(userInfo);
          const web3 = new Web3(web3auth.provider as any); // Aqui você deve ter certeza de que o provider é válido.
          
          const addresses = await web3.eth.getAccounts();
          console.log("Retrieved Ethereum accounts:", addresses);
          if (addresses.length > 0) {
            setAccounts(addresses);
          } else {
            console.log("No Ethereum accounts found.");
          }
        }
        
  
        const storedGoogleUserInfo = localStorage.getItem("googleUserInfo");
        if (storedGoogleUserInfo) {
          setGoogleUserInfo(JSON.parse(storedGoogleUserInfo));
          console.log('Google User Info after redirect:', JSON.parse(storedGoogleUserInfo));
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (!web3auth) {
      console.warn("web3auth is not initialized");
      return;
    }

    const onConnected = () => {
      setIsLoggedIn(true);
      router.push("/homePage");
    };

    const onDisconnected = () => {
      setIsLoggedIn(false);
      setProvider(null);
    };

    web3auth.on(ADAPTER_EVENTS.CONNECTED, onConnected);
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, onDisconnected);

    return () => {
      web3auth.off(ADAPTER_EVENTS.CONNECTED, onConnected);
      web3auth.off(ADAPTER_EVENTS.DISCONNECTED, onDisconnected);
    };
  }, [web3auth]);

  const signInWithGoogle = async (): Promise<UserCredential> => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("googleUserInfo", JSON.stringify(res.user));
      return res; // Retorna o ID token diretamente
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const login = async () => {
    try {
      if (!web3auth) {
        console.log("web3auth not initialized yet");
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
        const web3 = new Web3(web3authProvider as any);
        const addresses = await web3.eth.getAccounts();
  
        if (addresses.length > 0) {
          setAccounts(addresses);
        } else {
          console.log("No Ethereum accounts found.");
        }
  
        const userInfo = await web3auth.getUserInfo();
        setUserInfo(userInfo);
  
      }
      router.push("/homePage");
    } catch (error) {
      console.error(error);
    }
  };
  

  const checkAndCreateUserDoc = async (userInfo: any, uid: string) => {
    const db = getFirestore(); // Initialize Firestore
    const userRef = doc(db, "users", uid); // Reference to the user's document

    try {
      // 1. Check if the document already exists
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // 2. If the document doesn't exist, create a new user document
        await setDoc(userRef, {
          email: userInfo.email,
          address: userInfo.address, // Add any other necessary fields
          createdAt: new Date(),
        });
        console.log("New user document created.");
      } else {
        console.log("User already exists in Firestore.");
      }
    } catch (error) {
      console.error("Error checking or creating user document:", error);
    }
  };

  const WalletUi = async () => {
    try {
      await walletServicesPlugin?.showWalletUi();
    } catch (error) {
      console.error("error while displaying the wallet: ", error);
    }
  };

  const logout = async () => {
    try {
        if (provider) {
            // Adicione uma verificação para o status da conexão
            if (web3auth.status === ADAPTER_EVENTS.CONNECTED) {
                await web3auth.logout();
            } else {
                console.log("Wallet is not connected, skipping Web3Auth logout.");
            }
        } else {
            console.log("No wallet is connected, skipping Web3Auth logout.");
        }

        // Logout do Firebase Authentication
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        await signOut(auth); // Logout do Firebase

        // Limpando o estado do usuário
        setProvider(null);
        setIsLoggedIn(false);
        setAccounts([]); // Limpa as contas
        localStorage.removeItem("googleUserInfo");
        router.push("/");
    } catch (error) {
        console.error("Error during logout:", error);
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
    googleUserInfo,
  };
}
