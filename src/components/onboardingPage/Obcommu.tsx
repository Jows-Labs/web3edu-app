"use client";

import { Ob2LContainer } from "./components/Ob2LContainer";
import { Ob2RContainer } from "./components/Ob2RContainer";
import { useState } from "react";

export const ObCommu = ({ setLevel, level, handleTabClick }: ObCommu<void>) => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col md:gap-5">
      <Ob2LContainer />
      <Ob2RContainer />
    </div>
  );
};
