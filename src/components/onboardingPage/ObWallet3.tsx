"use client";

import { ObWL3 } from "./components/ObWL3";
import { ObWR3 } from "./components/ObWR3";

export const ObWallet3 = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObWL3 />
      <ObWR3 />
    </div>
  );
};
