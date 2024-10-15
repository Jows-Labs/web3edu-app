"use client";
import { useState } from "react";
import { Above } from "./Above";

export const Container = () => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/MmB9b5njVbA"
  );

  return (
    <div className="w-3/5 h-full flex flex-col justify-start items-start text-neutral bg-cgray rounded-box p-10 gap-3 overflow-y-auto">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <iframe
          src={videoLink}
          frameBorder="0"
          allowFullScreen
          className="aspect-video w-full h-auto rounded-box"
        />
      </div>
      <p className="font-extrabold text-2xl">
        Título da trilha Web3 Tafareid's House Work
      </p>
      <p className="fonte-medium">
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla Descrição da trilha bla bla bla
        Descrição da trilha bla bla bla
      </p>
      <Above />
    </div>
  );
};
