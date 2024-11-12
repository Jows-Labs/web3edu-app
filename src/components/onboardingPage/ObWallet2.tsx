"use client";

import { ObWL2 } from "./components/ObWL2";
import { ObWR2 } from "./components/ObWR2";

export const ObWallet2 = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObWL2 />
      <ObWR2 />
    </div>
  );
};
