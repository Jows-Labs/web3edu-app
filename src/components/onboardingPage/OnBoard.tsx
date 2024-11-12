"use client";

import { useState } from "react";
import { ObCommu } from "./Obcommu";
import { ObIntro } from "./ObIntro";

import { ObWalletConfig } from "./ObWalletConfig";

function OnBoard() {
  const [activeTab, setActiveTab] = useState("ObIntro");

  const [level, setLevel] = useState<string | undefined>(undefined);

  function Switch({ activeTab }: HandleScreenProps) {
    switch (activeTab) {
      case "ObIntro":
        return <ObIntro handleTabClick={setActiveTab} />;
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
