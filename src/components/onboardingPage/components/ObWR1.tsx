"use client";

import { MotionButton } from "../../ui/Button";
import Image from "next/image";
import Onboarding2 from "../../../assets/images/Onboarding2.jpg";

const teste = () => {
  console.log("oie");
};

export const ObWR1 = () => {
  return (
    <div className="md:w-3/6 w-full h-full flex flex-col items-center justify-center p-10 gap-5">
      <progress
        className="progress progress-success w-56"
        value="40"
        max="100"
      ></progress>
      <p
        style={{
          backgroundImage: `url(${Onboarding2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="md:w-2/4 w-full md:h-full h-fit  flex items-center justify-center text-4xl font-bold shadow-2xl rounded-box"
      ></p>
      <div className="w-fit h-fit rounded-box bg-cgray flex font-semibold text-xl p-7">
        <p>Vá até a aba de "Configurações"</p>
      </div>
      <MotionButton
        label="Proximo Passo"
        type="button"
        func={teste}
        className="bg-cgreen w-[24vh] text-lg font-semibold"
      />
    </div>
  );
};
