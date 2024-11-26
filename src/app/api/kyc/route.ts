import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await req.json();
    const userDocRef = doc(db, "users", data.uid);

    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      await updateDoc(userDocRef, {
        kyc: {
          level: data.userInfo.level,
          interests: data.userInfo.interests,
        },
      });

      return new NextResponse(
        JSON.stringify({ message: "Dados de KYC atualizados com sucesso" }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Usuário não encontrado" }),
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
