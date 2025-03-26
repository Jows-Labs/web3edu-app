import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { get } from "http";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const trailId = req.nextUrl.searchParams.get("trailId");
  const Id = req.nextUrl.searchParams.get("Id");
  try {
    const filePath = path.join(
      process.cwd(),
      "src/contents/trails",
      trailId !== null ? trailId : "",
      `/${Id}.mdx`
    );
    console.log("[USOF[SAOUIFVG{UIVfPUIVSFPIUvPVFPIUSVBSAPIVDFSPI", filePath);
    const file = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(file);
    const mdxSource = await serialize(content);

    return new NextResponse(
      JSON.stringify({
        mdxSource,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse("Arquivo não encontrado", { status: 500 });
  }
};
