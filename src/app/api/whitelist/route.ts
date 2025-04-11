import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { uid, walletAddress, trailId, ipfsHash } = await req.json();
    if (!trailId || !walletAddress || !uid || !ipfsHash) {
      return new NextResponse(
        JSON.stringify({
          error: `Parâmetros trailId, walletAddres, ipfsHash e uid são obrigatórios ${uid}, ${walletAddress}, ${trailId}, ${ipfsHash}`,
        }),
        { status: 400 }
      );
    }
    const whitelistDocRef = doc(db, "whitelist", uid);
    const docSnap = await getDoc(whitelistDocRef);

    if (docSnap.exists()) {
      // Se o documento já existe, atualiza o status da trilha
      await updateDoc(whitelistDocRef, {
        address: walletAddress, // Atualiza o endereço, se necessário
        [`status.${trailId}`]: {
          // Usa a notação de colchetes para criar a chave dinamicamente
          eligible: true,
          ipfsHash: ipfsHash,
        },
      });

      return new NextResponse(
        JSON.stringify({
          message: "Status do usuário atualizado na whitelist com sucesso",
        }),
        { status: 200 }
      );
    } else {
      // Cria o novo documento na coleção "whitelist"
      await setDoc(whitelistDocRef, {
        address: walletAddress,
        status: {
          // Cria o objeto status com a trilha como chave
          [trailId]: {
            eligible: true,
            ipfsHash: ipfsHash,
            minted: false,
            txHash: "",
          },
        },
      });

      return new NextResponse(
        JSON.stringify({
          message: "Usuário adicionado à whitelist com sucesso",
        }),
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const uid = req.nextUrl.searchParams.get("uid");
    const trailId = req.nextUrl.searchParams.get("trailId");
    if (!uid || !trailId) {
      return new NextResponse(
        JSON.stringify({
          error: "Parâmetros uid e trailId são obrigatórios",
        }),
        { status: 400 }
      );
    }

    const whitelistDocRef = doc(db, "whitelist", uid);
    const docSnap = await getDoc(whitelistDocRef);

    if (!docSnap.exists()) {
      return new NextResponse(
        JSON.stringify({
          eligible: true,
        }),
        { status: 200 }
      );
    }

    const userData = docSnap.data();
    const trailStatus = userData?.status?.[trailId];

    if (!trailStatus) {
      return new NextResponse(
        JSON.stringify({
          eligible: false,
        }),
        { status: 200 }
      );
    }
  
    // Check if the user is eligible and has no TX hash, maybe validate the minted status
    const isEligible = trailStatus.eligible && trailStatus.txHash === "";

    return new NextResponse(
      JSON.stringify({
        eligible: isEligible,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
