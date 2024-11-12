"use client";

import { ObWL4 } from "./components/ObWL4";
import { ObWR4 } from "./components/ObWR4";

export const ObWallet4 = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObWL4 />
      <ObWR4 />
    </div>
  );
};
