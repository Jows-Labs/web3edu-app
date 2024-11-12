"use client";

import { useState } from "react";
import { ObCommu } from "./Obcommu";
import { ObIntro } from "./ObIntro";
import { ObWallet1 } from "./ObWallet1";
import { ObWallet2 } from "./ObWallet2";
import { ObWallet3 } from "./ObWallet3";
import { ObWallet4 } from "./ObWallet4";
import { ObWalletConfig } from "./ObWalletConfig";

function OnBoard() {
  const [activeTab, setActiveTab] = useState("ObIntro");

  const [level, setLevel] = useState<string | undefined>(undefined);

  function Switch({ activeTab }: HandleScreenProps) {
    switch (activeTab) {
      case "ObIntro":
        return <ObIntro handleTabClick={setActiveTab} />;
      case "ObCommu":
        return (
          <ObCommu
            handleTabClick={setActiveTab}
            setLevel={setLevel}
            level={level}
          />
        );
    }
  }
  return <div className="flex justify-center ">{Switch({ activeTab })}</div>;
}

export default OnBoard;
