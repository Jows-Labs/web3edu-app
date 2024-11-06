import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { trailId, sectionId, uid } = await req.json();

    if (!trailId || !sectionId || !uid) {
      return new NextResponse(
        "Parâmetros trailId, sectionId e uid são obrigatórios",
        { status: 400 }
      );
    }

    const userDocRef = doc(db, "users", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      await updateDoc(userDocRef, {
        trails: arrayUnion({
          trailId: trailId,
          doneSections: [sectionId],
        }),
      });

      return new NextResponse(
        JSON.stringify({ message: "Seção adicionada com sucesso" }),
        { status: 200 }
      );
    } else {
      return new NextResponse("Usuário não encontrado", { status: 404 });
    }
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
