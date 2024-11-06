import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  collection,
  getDocs,
} from "firebase/firestore";
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
    const trailDocRef = doc(db, "trails", trailId);
    const contentsCollectionRef = collection(trailDocRef, "contents");

    const [userDocSnap, contentsSnap] = await Promise.all([
      getDoc(userDocRef),
      getDocs(contentsCollectionRef),
    ]);

    if (userDocSnap.exists() && contentsSnap.size > 0) {
      const trailSections = contentsSnap.docs.map((doc) => doc.id);

      const userTrails = userDocSnap.data()?.trails || [];
      const existingTrailIndex = userTrails.findIndex(
        (trail: any) => trail.trailId === trailId
      );

      let doneSections = [sectionId];
      if (existingTrailIndex !== -1) {
        doneSections = [
          ...userTrails[existingTrailIndex].doneSections,
          sectionId,
        ];
      }

      const completedSectionsCount = doneSections.filter((section) =>
        trailSections.includes(section)
      ).length;

      const percentage =
        trailSections.length > 0
          ? Math.round((completedSectionsCount / trailSections.length) * 100)
          : 0;

      if (existingTrailIndex !== -1) {
        userTrails[existingTrailIndex] = {
          trailId: trailId,
          doneSections: doneSections,
          percentage: percentage,
        };
      } else {
        userTrails.push({
          trailId: trailId,
          doneSections: doneSections,
          percentage: percentage,
        });
      }

      await updateDoc(userDocRef, { trails: userTrails });

      return new NextResponse(
        JSON.stringify({ message: "Seção adicionada com sucesso" }),
        { status: 200 }
      );
    } else {
      return new NextResponse("Usuário ou trilha não encontrado", {
        status: 404,
      });
    }
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
