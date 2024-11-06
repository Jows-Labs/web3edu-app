import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const docsRef = collection(db, "users");
    const querySnapshot = await getDocs(docsRef);

    const docs: any = [];

    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });

    return new NextResponse(JSON.stringify({ docs }), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse("Erro ao buscar documentos", { status: 500 });
  }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await req.json();
    console.log(data);
    const userDocRef = doc(db, "users", data.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return new NextResponse(JSON.stringify({ user: userData }), {
        status: 200,
      });
    } else {
      const user = await setDoc(userDocRef, data);

      return new NextResponse(
        JSON.stringify({
          message: "UsuÃ¡rio adicionado com sucesso",
          user: user,
        }),
        { status: 200 }
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
