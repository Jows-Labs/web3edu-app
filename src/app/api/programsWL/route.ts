import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { programId, address, email, name } = await req.json();
    if (!programId || !address || !email || !name) {
      return new NextResponse(
        JSON.stringify({
          error: `Parameters programId, address, email and name are required`,
        }),
        { status: 400 }
      );
    }

    const programDocRef = doc(db, "programsWL", programId);
    const docSnap = await getDoc(programDocRef);

    if (docSnap.exists()) {
      const users = docSnap.data()?.users;
      const userExists = users?.some((user: any) => user.address === address);

      if (userExists) {
        return new NextResponse(
          JSON.stringify({
            message: "You already have an open request for this program.",
          }),
          { status: 400 }
        );
      }
    }

    await updateDoc(programDocRef, {
      users: arrayUnion({
        address: address,
        email: email,
        minted: false,
        name: name,
        txHash: "",
      }),
    });

    return new NextResponse(
      JSON.stringify({
        message: "User added to array successfully",
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
