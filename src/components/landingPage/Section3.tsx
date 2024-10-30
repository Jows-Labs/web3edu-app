"use client";

import Image from "next/image";
import UserDocIcon from "../../assets/icons/user-doc-icon.svg";
import ForumIcon from "../../assets/icons/forum-icon.svg";
import TrailIcon from "../../assets/icons/trail-icon.svg";
import { MotionButton } from "../ui/Button";
import { useState } from "react";

export const Section3 = () => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/MmB9b5njVbA"
  );

  function teste() {
    console.log("teste");
  }
  return (
    <div className="h-fit w-full flex bg-neutralbg p-20 justify-between">
      <div className="flex flex-col w-2/5 h-4/5 justify-between items-center">
        <div className="h-full w-full">
          <div className="w-full flex">
            <p className="font-bold whitespace-pre-wrap text-neutral">
              Acessando o Futuro com a{" "}
            </p>
            <p className="font-bold text-cgreen"> Web3EduBrasil</p>
          </div>
          <p className="whitespace-pre-wrap"> </p>
          <p className="font-bold text-4xl text-neutral">
            Explore a Plataforma
          </p>
          <p className="whitespace-pre-wrap"> </p>
          <p className="text-gray">
            Veja a seguir as nossas principais funções presentes em nosso site.
            <strong> Aprenda</strong> as principais coisas do mundo do Web3!
          </p>
        </div>

        <div className="flex w-full border border-cgray h-fit rounded-full p-2 justify-between text-neutral">
          <MotionButton
            className="bg-cgreen w-[30%] text-neutral rounded-full"
            type="button"
            func={() =>
              setVideoLink("https://www.youtube.com/embed/MmB9b5njVbA")
            }
            label="Artigos"
            Icon={() => (
              <Image src={UserDocIcon} alt="Trail Icon" className="w-4 h-4" />
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
      <div className="flex flex-col w-2/4 min-h-full justify-between items-center">
        <iframe
          src={videoLink}
          frameBorder="0"
          allowFullScreen
          className="aspect-video h-full rounded-box"
        />
      </div>
    </div>
  );
};
