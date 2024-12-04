"use client";

import { Trails } from "@/components/TrailsPage/Trails";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function trailsPage() {

  return (
    <>
      <Trails />
    </>
  );
}
