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
  const [type, setType] = useState("quiz");
  return (
    <div className="md:w-3/5 w-full h-full flex gap-2 ">
      <div className="w-full h-full bg-cgray md:rounded-box flex flex-col justify-start items-end text-neutral md:overflow-y-auto p-8 font-medium text-medium gap-3">
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
          className="bg-green text-neutral w-2/5 h-12"
          func={teste}
          Icon={FaArrowRight}
        />
      </div>
    </div>
  );
};
