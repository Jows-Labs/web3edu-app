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

  const [level, setLevel] = useState<string | undefined>(undefined);
  return (
    <div className="flex-col flex items-center justify-start border border-dgray rounded-box h-[75vh] w-[25vw] p-4  ">
      <KycIntro />

      <Kyc1 setLevel={setLevel} level={level} />

      <Kyc2 />

      <MotionButton
        label="Avançar"
        type="button"
        func={teste}
        className="bg-cgreen w-3/5 text-white"
      />
    </div>
  );
}

export default KnowLedge;
