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
  
  export const POST = async (req: NextRequest) => {
    try {
      // Extrair o `trailId` dos parâmetros da URL
      const data = await req.json();
      const trailId = data.trailId;
  
      if (!trailId) {
        return new NextResponse("Parâmetro trailId é obrigatório", { status: 400 });
      }
  
      // Referência para a subcoleção `contents` do `trailId` especificado
      const contentsRef = collection(db, `trails/${trailId}/contents`);
      const contentsSnapshot = await getDocs(contentsRef);
  
      // Obter todos os documentos da subcoleção `contents`
      const contents = contentsSnapshot.docs.map(contentDoc => ({
        id: contentDoc.id,
        ...contentDoc.data(),
      }));
  
      return new NextResponse(JSON.stringify({ trailId, contents }), {
        status: 200,
      });
    } catch (error) {
      console.error("Erro ao buscar subcoleção:", error);
      return new NextResponse("Erro ao buscar subcoleção", { status: 500 });
    }
  };