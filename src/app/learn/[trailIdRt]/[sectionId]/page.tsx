"use client";

import { Learn } from "@/components/learn/Learn";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TrailPage() {
  const { trailIdRt, sectionId } = useParams();
  const router = useRouter();
  const { isLoggedIn } = useWeb3Auth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return <Learn trailIdRt={trailIdRt} sectionId={sectionId} />;
}
