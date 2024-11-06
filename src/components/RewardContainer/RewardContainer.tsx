"use client";

import { MotionButton } from "../ui/Button";
import { RxCross2 } from "react-icons/rx";

function teste() {
  console.log("teste");
}

export const RewardContainer = () => {
  const textos = [
    {
      nome: "[Nome da Pessoa]! 😄",
      texto0: "Oi,",
      text1:
        "Queremos te agradecer de coração por se dedicar ao máximo durante essa jornada! Sabemos que você se esforçou assistindo aos vídeos, lendo artigos e mergulhando em cada curso. E ainda mandou muito bem no quiz final! 🎉👏",
      text2:
        "Todo o seu empenho e dedicação não passaram despercebidos. E, para celebrar essa conquista, você receberá um token NFT como recompensa! 💎✨ Esse token simboliza tudo o que você aprendeu e o seu compromisso em cada etapa dessa trilha.",
    },
  ];
  return (
    <div className="w-full  flex justify-center items-center text-neutral absolute z-20 ">
      <div className="md:w-96 w-full h-fit flex flex-col rounded-box p-5 gap-3 bg-cgray shadow-lg font-semibold items-start cursor-default">
        {textos.map((e) => {
          return (
            <>
              <div className="flex justify-between">
                <p>
                  {e.texto0} {e.nome}
                </p>
                <RxCross2 className="cursor-pointer" />
              </div>
              <p>{e.text1}</p>
              <p>{e.text2}</p>
            </>
          );
        })}
        <MotionButton
          rightIcon={true}
          label="Resgatar Agora!"
          type="button"
          className="bg-green text-neutral w-full h-12 self-end font-semibold text-xl"
          func={teste}
        />
      </div>
    </div>
  );
};
