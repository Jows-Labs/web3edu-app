"use client";

import { useState } from "react";

interface VideoTaskProps {
  fetchNext: () => Promise<void>;
}

export const RenderVideoV = ({ fetchNext }: VideoTaskProps) => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/MmB9b5njVbA"
  );
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-5">
          <p className="text-cblue md:text-xl text-lg">
            Assista o vídeo a seguir
          </p>
          <p className="md:text-lg text-base">
            Entenda a realidade do mercado de trabalho atual: desafios,
            expectativas e o que é preciso para se destacar! Neste vídeo,
            falamos sobre as principais tendências e como se preparar para
            alcançar seus objetivos profissionais.
          </p>
        </div>
        <div className="w-full h-fit justify-center items-center">
          <iframe
            src={videoLink}
            frameBorder="0"
            allowFullScreen
            className="aspect-video w-full h-auto rounded-box"
          />
        </div>
      </div>
      <MotionButton
        rightIcon={true}
        label="Marcar como concluído"
        type="button"
        className="bg-green text-neutral w-2/5 h-12 self-end"
        func={() => fetchNext()}
      />
    </>
  );
};
