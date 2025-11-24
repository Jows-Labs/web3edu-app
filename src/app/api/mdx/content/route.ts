import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return new NextResponse(
    JSON.stringify({
      message:
        "This endpoint is deprecated. Use /api/trail/contents/section?trailId={trailId}&sectionId={sectionId}&uid={uid} to fetch MDX stored in Firestore.",
    }),
    {
      status: 410,
      headers: { "Content-Type": "application/json" },
    }
  );
};
