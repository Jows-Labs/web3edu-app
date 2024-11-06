"use client";

import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { MotionButton } from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { IconButton } from "../ui/IconButton";

export const RewardContainer = () => {
  const [visibility, setVisibility] = useState(true);

  const { googleUserInfo } = useWeb3AuthContext();

  const texts = [
    {
      nome: `${googleUserInfo.displayName}! 😄`,
      texto0: "Oi,",
      text1:
        "Queremos te agradecer de coração por se dedicar ao máximo durante essa jornada! Sabemos que você se esforçou assistindo aos vídeos, lendo artigos e mergulhando em cada curso. E ainda mandou muito bem no quiz final! 🎉👏",
      text2:
        "Todo o seu empenho e dedicação não passaram despercebidos. E, para celebrar essa conquista, você receberá um token NFT como recompensa! 💎✨ Esse token simboliza tudo o que você aprendeu e o seu compromisso em cada etapa dessa trilha.",
    },
  ];

  function teste() {
    console.log("teste");
  }

  useEffect(() => {
    console.log(googleUserInfo);
  }, [googleUserInfo]);
  return (
    <div
      className={`w-full min-h-full bg-black/50 flex justify-center items-center text-neutral absolute z-20 top-0 px-5 md:px-0 ${
        visibility ? "visible" : "invisible"
      }`}
    >
      <div className="md:w-96 w-full h-fit flex flex-col rounded-box p-5 gap-3 bg-cgray shadow-lg font-semibold items-start cursor-default">
        {texts.map((e) => {
          return (
            <>
              <div className="flex justify-between w-full items-center">
                <p>
                  {e.texto0} {e.nome}
                </p>
                <IconButton
                  Icon={RxCross2}
                  func={() => setVisibility(false)}
                  className="h-5"
                />
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
