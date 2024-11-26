"use client";

import Image from "next/image";
import GiftIcon from "../../assets/icons/gift.svg";
import ForumIcon from "../../assets/icons/forum-icon.svg";
import TrailIcon from "../../assets/icons/trail-icon.svg";
import { MotionButton } from "../ui/Button";
import { useState } from "react";

export const Section3 = () => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/0kIIDNvxqug"
  );

  function teste() {
    console.log("teste");
  }
  return (
    <div className="h-fit w-full flex md:flex-row flex-col bg-neutralbg md:p-20 p-10 md:gap-20 gap-4">
      <div className="flex flex-col md:w-2/5 w-full min-h-full justify-between items-center gap-4 py-8">
        <div className="h-full w-full">
          <div className="w-full flex md:flex-row flex-col text-3xl">
            <p className="font-bold whitespace-pre-wrap text-neutral">
              Acessando o Futuro <br></br>com a
              <span className="font-bold text-cgreen w-fit">
                {" "}
                Web3EduBrasil
              </span>
            </p>
          </div>
          <p className="whitespace-pre-wrap"> </p>
          <p className="font-bold md:text-4xl text-3xl text-neutral">
            Explore a Plataforma
          </p>
          <p className="whitespace-pre-wrap"> </p>
          <p className="text-gray w-3/4">
            Veja a seguir as nossas principais funções presentes em nosso site.
            <strong> Aprenda</strong> as principais coisas do mundo do Web3!
          </p>
        </div>

        <div className="flex w-full border border-cgray h-fit rounded-full p-2 justify-between text-neutral">
          <MotionButton
            className="bg-cgreen w-[30%] text-neutral rounded-full"
            type="button"
            func={() =>
              setVideoLink("https://www.youtube.com/embed/0kIIDNvxqug")
            }
            label="Recompensas"
            Icon={() => (
              <Image src={GiftIcon} alt="Trail Icon" className="w-4 h-4" />
            )}
          />
          <MotionButton
            className="bg-cgreen w-[30%] text-neutral rounded-full"
            type="button"
            func={() =>
              setVideoLink("https://www.youtube.com/embed/Rla3FUlxJdE")
            }
            label="Fórum"
            Icon={() => (
              <Image src={ForumIcon} alt="Trail Icon" className="w-4 h-4" />
            )}
          />
          <MotionButton
            className="bg-cgreen w-[30%] text-neutral rounded-full"
            type="button"
            func={() =>
              setVideoLink("https://www.youtube.com/embed/NG-5L34HqOs")
            }
            label="Trilhas"
            Icon={() => (
              <Image src={TrailIcon} alt="Trail Icon" className="w-4 h-4" />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col md:w-2/4 w-full min-h-full justify-between items-center">
        <iframe
          src={videoLink}
          frameBorder="0"
          allowFullScreen
          className="aspect-video md:h-full w-full h-auto rounded-box"
        />
      </div>
    </div>
  );
};
