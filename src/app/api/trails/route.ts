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
  import { getApp, getApps, initializeApp } from "firebase/app";
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
  import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    initializeFirestore,
    memoryLocalCache,
    setDoc,
  } from "firebase/firestore";

  import { db } from "@/firebase/config";
  import { NextRequest, NextResponse } from "next/server";

  export const GET = async () => {
    try {
      const docsRef = collection(db, "trails");
      const querySnapshot = await getDocs(docsRef);
  
      const trails: any = [];
  
      querySnapshot.forEach((trail) => {
        trails.push(trail.data());
      });
  
      return new NextResponse(JSON.stringify({ trails }), {
        status: 200,
      });
    } catch (error: any) {
      console.log(error.message);
      return new NextResponse("Erro ao buscar trilha", { status: 500 });
    }
  };