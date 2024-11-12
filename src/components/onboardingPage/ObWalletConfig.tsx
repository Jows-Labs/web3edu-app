"use client";

import { ObWLContainer } from "./components/ObWLContainer";
import { ObWRContainer } from "./components/ObWRContainer";

export const ObWalletConfig = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObWLContainer />
      <ObWRContainer />
    </div>
  );
};
