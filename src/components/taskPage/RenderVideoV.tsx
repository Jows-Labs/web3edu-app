"use client";

import { useState } from "react";

export const RenderVideoV = () => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/MmB9b5njVbA"
  );
  return (
    <div>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-3">
        <p className="text-cblue">Assista o vídeo a seguir</p>
        <p>
          Entenda a realidade do mercado de trabalho atual: desafios,
          expectativas e o que é preciso para se destacar! Neste vídeo, falamos
          sobre as principais tendências e como se preparar para alcançar seus
          objetivos profissionais.
        </p>
      </div>
      <div className="mt-5 w-full h-fit justify-center items-center">
        <iframe
          src={videoLink}
          frameBorder="0"
          allowFullScreen
          className="aspect-video w-full h-auto rounded-box"
        />
      </div>
    </div>
  );
};
