"use client";

import { useState } from "react";
import { MotionButton } from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import { RenderTextV } from "./RenderTextV";
import { RenderVideoV } from "./RenderVideoV";
import { RenderQuizV } from "./RenderQuizV";

function teste() {
  console.log("teste");
}

export const TaskCard = () => {
  const [type, setType] = useState("text");
  return (
    <div className="md:w-3/5 w-full h-full flex gap-5">
      <div className="w-full h-full bg-cgray relative md:rounded-box flex flex-col justify-between items-end text-neutral md:overflow-y-auto p-8 font-medium text-medium gap-5">
        {type === "text" ? (
          <>
            <RenderTextV />
          </>
        ) : type === "video" ? (
          <>
            <RenderVideoV />
          </>
        ) : (
          <>
            <RenderQuizV />
          </>
        )}
        <MotionButton
          rightIcon={true}
          label="Prosseguir"
          type="button"
          className="bg-green text-neutral w-2/5 h-12 self-end"
          func={teste}
          Icon={FaArrowRight}
        />
      </div>
    </div>
  );
};
