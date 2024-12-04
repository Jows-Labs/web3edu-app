"use client";

import OnBoard from "@/components/onboardingPage/OnBoard";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function onboarding() {
  const router = useRouter();
  const { isLoggedIn, googleUserInfo } = useWeb3AuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
      toast.warning("Faça login para acessar esta tela");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(googleUserInfo);
  }, [googleUserInfo]);
  return (
    <>
      <OnBoard />
    </>
  );
}
