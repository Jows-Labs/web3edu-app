"use client";

import { Learn } from "@/components/learn/Learn";
import { useParams } from "next/navigation";

export default function ProgramPage() {
  const { trailIdRt, sectionId } = useParams();

  return <Learn trailIdRt={trailIdRt} sectionId={sectionId} />;
}
