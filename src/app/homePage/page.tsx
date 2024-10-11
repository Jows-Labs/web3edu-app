"use client";

import { Home } from "@/components/homePage/Home";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function homePage() {
  const router = useRouter();
  const { isLoggedIn, userInfo, userAccount } = useWeb3AuthContext();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     // Redirecionar de volta para a página de login se não estiver autenticado
  //     router.push('/');
  //   } else {
  //     // Carregar informações do usuário
  //     console.log('User Info:', userInfo);
  //     console.log('User Account:', userAccount);
  //   }
  // }, [isLoggedIn, userInfo, userAccount]);
  return <Home />;
}
