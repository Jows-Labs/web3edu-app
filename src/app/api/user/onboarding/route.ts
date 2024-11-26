import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await req.json();
    console.log(data);

    const userDocRef = doc(db, "users", data.uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      await updateDoc(userDocRef, { tutorialDone: true });

      return new NextResponse(
        JSON.stringify({ message: "Field 'tutorialDone' updated to true." }),
        { status: 200 }
      );
    } else {
      return new NextResponse(
        JSON.stringify({ message: "User document does not exist." }),
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
};
