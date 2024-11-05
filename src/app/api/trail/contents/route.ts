import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const trailId = req.nextUrl.searchParams.get("trailId");

    if (!trailId) {
      return new NextResponse("Parâmetro trailId é obrigatório", {
        status: 400,
      });
    }

    const contentsRef = collection(db, `trails/${trailId}/contents`);
    const contentsSnapshot = await getDocs(contentsRef);

    const contents = contentsSnapshot.docs.map((contentDoc) => ({
      id: contentDoc.id,
      ...contentDoc.data(),
    }));

    return new NextResponse(JSON.stringify(contents), {
      status: 200,
    });
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return new NextResponse("Erro ao buscar dados", { status: 500 });
  }
};
