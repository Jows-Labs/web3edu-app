"use client";

import { useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import Kyc1 from "./Kyc1";
import Kyc2 from "./Kyc2";
import KycIntro from "./KycIntro";

function KnowLedge() {
  const [activeTab, setActiveTab] = useState("KycIntro");

  const [level, setLevel] = useState<string | undefined>(undefined);
  const [interests, setInterests] = useState<Interests>({
    crypto: false,
    blockchain: false,
    rwa: false,
    smartcontracts: false,
    defi: false,
  });

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
            level={level}
          />
        );
    }
  }
  return (
    <div className="flex-col flex items-center justify-between border border-dgray rounded-box h-[40rem] w-[30rem] p-4 ">
      {Switch({ activeTab })}
    </div>
  );
}

export default KnowLedge;
