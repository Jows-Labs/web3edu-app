"use client";

import { UserSection } from "@/components/UserPage/userCard";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function userPage() {
  const router = useRouter();
  const { isLoggedIn } = useWeb3Auth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
      toast.warning("Faça login para acessar esta tela");
    }
  }, [isLoggedIn]);
  return <UserSection />;
}
