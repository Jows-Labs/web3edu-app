"use client";

import { useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import Kyc1 from "./Kyc1";
import Kyc2 from "./Kyc2";
import KycIntro from "./KycIntro";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { userInfo } from "os";
import { Bounce, toast } from "react-toastify";

function KnowLedge() {
  const [activeTab, setActiveTab] = useState("KycIntro");

  const { googleUserInfo } = useWeb3AuthContext();

  const [level, setLevel] = useState<string>("");
  const [interests, setInterests] = useState<Interests>({
    crypto: false,
    blockchain: false,
    rwa: false,
    smartcontracts: false,
    defi: false,
  });

  const fetchKyc = async () => {
    try {
      const response = await fetch("/api/kyc", {
        method: "POST",
        headers: { "Content-Type": "aplication/json" },
        body: JSON.stringify({
          uid: googleUserInfo?.uid,
          userInfo: {
            level: level,
            interests: interests,
          },
        }),
      });
      if (response.ok) {
        toast.success("Formulário enviado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  function Switch({ activeTab }: HandleScreenProps) {
    switch (activeTab) {
      case "KycIntro":
        return <KycIntro handleTabClick={setActiveTab} />;
      case "Kyc1":
        return (
          <Kyc1
            handleTabClick={setActiveTab}
            setLevel={setLevel}
            level={level}
          />
        );
      case "Kyc2":
        return (
          <Kyc2
            handleTabClick={setActiveTab}
            interests={interests}
            setInterests={setInterests}
            fetchKyc={fetchKyc}
          />
        );
    }
  }
  return (
    <div className="z-20 backdrop-blur-[1.5px] absolute top-0 bg-black/50 flex justify-center items-center w-full min-h-full">
      <div className="flex-col flex items-center bg-cgray justify-between shadow-2xl rounded-box h-[40rem] w-[30rem] py-6 px-8">
        {Switch({ activeTab })}
      </div>
    </div>
  );
}

export default KnowLedge;
