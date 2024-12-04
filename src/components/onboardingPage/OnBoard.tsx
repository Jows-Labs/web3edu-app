"use client";

import { useEffect, useState } from "react";
import { ObCommu } from "./Obcommu";
import { ObIntro } from "./ObIntro";

import { ObWalletConfig } from "./ObWalletConfig";
import { ObTutorial } from "./ObTutorial";
import { useRouter } from "next/navigation";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { toast } from "react-toastify";

function OnBoard() {
  const [activeTab, setActiveTab] = useState("ObIntro");

  const router = useRouter();
  const { isLoggedIn } = useWeb3AuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
      toast.warning("Faça login para acessar esta tela");
    }
  }, [isLoggedIn]);

  function Switch({ activeTab }: HandleScreenProps) {
    switch (activeTab) {
      case "ObIntro":
        return <ObIntro handleTabClick={setActiveTab} />;
      case "ObTutorial":
        return <ObTutorial handleTabClick={setActiveTab} />;
      case "ObCommu":
        return <ObCommu handleTabClick={setActiveTab} />;
      case "ObWalletConfig":
        return <ObWalletConfig handleTabClick={setActiveTab} />;
    }
  }
  return (
    <div className="flex justify-center items-center w-full h-full ">
      {Switch({ activeTab })}
    </div>
  );
}

export default OnBoard;
