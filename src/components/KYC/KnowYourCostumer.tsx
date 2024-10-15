"use client";

import { useState } from "react";
import { MotionButton } from "../ui/Button";
import Kyc1 from "./Kyc1";
import Kyc2 from "./Kyc2";
import KycIntro from "./KycIntro";

function KnowLedge() {
  function teste() {
    console.log("oi");
  }

  const [activeTab, setActiveTab] = useState("KycIntro");

  const [level, setLevel] = useState<string | undefined>(undefined);

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
            setLevel={setLevel}
            level={level}
          />
        );
    }
  }
  return (
    <div className="flex-col flex items-center justify-start border border-dgray rounded-box h-[75vh] w-[25vw] p-4  ">
      {Switch({ activeTab })}
    </div>
  );
}

export default KnowLedge;
