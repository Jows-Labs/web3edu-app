import { useState } from "react";
import { TrailCardsLanding } from "./TrailCardLanding";
export const Section4 = () => {
  return (
    <div className="w-full h-fit flex bg-neutralbg md:px-20 px-10 py-10 flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="text-neutral text-4xl font-bold text-center">
          Trilhas de Aprendizagem
        </p>
        <p className="text-gray md:px-20 font-medium text-justify ">
          Explore <strong>conteúdos detalhados</strong> sobre esses temas
          fascinantes e amplie seu conhecimento sobre o universo digital das
          finanças e tecnologia. Seja bem-vindo à sua jornada de a{" "}
          <strong>aprendizado </strong>
          conosco!
        </p>
      </div>

      <TrailCardsLanding />
    </div>
  );
};
