"use client";

import { Home } from "@/components/homePage/Home";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { Island_Moments } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function homePage() {
  const router = useRouter();
  const { isLoggedIn } = useWeb3AuthContext();

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn === undefined) {
      console.log("teste");
      return;
    }
    if (isLoggedIn === false) {
      router.push("/");
      toast.warning("Faça login para acessar esta tela");
    }
  }, [isLoggedIn]);

  return <Home />;
}
