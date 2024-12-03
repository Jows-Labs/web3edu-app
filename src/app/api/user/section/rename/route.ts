import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { trailId } = await req.json();

    if (!trailId) {
      return new NextResponse("Parâmetro trailId é obrigatório", {
        status: 400,
      });
    }

    const trailDocRef = doc(db, "trails", trailId);
    const contentsCollectionRef = collection(trailDocRef, "contents");

    // Obter todos os documentos de "contents"
    const contentsSnap = await getDocs(contentsCollectionRef);

    if (contentsSnap.empty) {
      return new NextResponse("Nenhum documento encontrado em contents", {
        status: 404,
      });
    }

    let count = 1; // Inicializa o contador para os novos nomes

    for (const contentDoc of contentsSnap.docs) {
      const contentData = contentDoc.data(); // Obtem os dados do documento

      // Define o novo ID baseado no contador
      const newDocId = count.toString();

      // Cria o novo documento com o novo ID
      const newDocRef = doc(contentsCollectionRef, newDocId);
      await setDoc(newDocRef, contentData);

      // Opcional: Apagar o documento antigo após a criação do novo
      await deleteDoc(contentDoc.ref);

      count++; // Incrementa o contador
    }

    return new NextResponse(
      JSON.stringify({ message: "Documentos renomeados com sucesso" }),
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
