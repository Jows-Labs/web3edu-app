"use client";

import { ObWL1 } from "./components/ObWL1";
import { ObWLContainer } from "./components/ObWLContainer";
import { ObWR1 } from "./components/ObWR1";
import { ObWRContainer } from "./components/ObWRContainer";

export const ObWallet1 = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObWL1 />
      <ObWR1 />
    </div>
  );
};
