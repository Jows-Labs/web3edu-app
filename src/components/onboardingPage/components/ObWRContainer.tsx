"use client";

import { MotionButton } from "../../ui/Button";

const teste = () => {
  console.log("oie");
};

export const ObWRContainer = () => {
  return (
    <div className="md:w-3/6 w-full h-full flex flex-col items-center justify-center p-10 gap-10">
      <progress
        className="progress progress-success w-56"
        value="10"
        max="100"
      ></progress>
      <p className="md:w-3/5 w-full md:h-3/5 h-fit border border-neutral flex items-center justify-center text-4xl font-bold shadow-2xl rounded-box">
        Image
      </p>
      <div className="w-fit h-fit rounded-box bg-cgray flex font-semibold text-xl p-10">
        <p>Entre na carteira localizada no canto superior direito</p>
      </div>
      <MotionButton
        label="Proximo Passo"
        type="button"
        func={teste}
        className="bg-cgreen w-[18vh] text-lg font-semibold"
      />
    </div>
  );
};
