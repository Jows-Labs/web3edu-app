"use client";

import { ObCommuContainers } from "./components/ObCommuContainer";
import { useState } from "react";

export const ObCommu = ({ handleTabClick }: OnboardingProps<void>) => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col md:gap-5">
      <ObCommuContainers handleTabClick={handleTabClick} />
    </div>
  );
};
