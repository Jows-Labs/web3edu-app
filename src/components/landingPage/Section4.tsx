import { useState } from "react";
import { TrailCardLanding } from "./TrailCardLanding";
export const Section4 = () => {
  return (
    <div className="w-full flex bg-neutralbg p-20 flex-col justify-center items-center gap-5">
      <p className="text-neutral text-4xl font-bold">Trilhas de Aprendizagem</p>
      <p className="text-gray px-20 font-medium">
        Explore <strong>conteúdos detalhados</strong> sobre esses temas
        fascinantes e amplie seu conhecimento sobre o universo digital das
        finanças e tecnologia. Seja bem-vindo à sua jornada de a{" "}
        <strong>aprendizado </strong>
        conosco!
      </p>
      <div>
        <TrailCardLanding />
      </div>
    </div>
  );
};
