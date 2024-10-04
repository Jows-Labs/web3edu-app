"use client";
import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";

export const Container = () => {
  const [videoLink, setVideoLink] = useState(
    "https://www.youtube.com/embed/MmB9b5njVbA"
  );

  return (
    <div className="h-[60vh] w-full bg-neutral flex py-3 justify-center items-center px-20 gap-10">
      <div className="w-full h-full justify-start flex flex-col gap-3 ">
        <div className="breadcrumbs text-sm w-full font-bold text-cblue">
          <ul>
            <li>
              <a>Desenvolvimento</a>
            </li>
            <li>
              <a>Linguagem de Programação</a>
            </li>
            <li>Java</li>
          </ul>
        </div>
        <div className="text-white w-full flex flex-col gap-3">
          <p className="text-4xl font-bold">
            Java COMPLETO Programação Orientada a Objetos + Projetos
          </p>
          <p className="text-lg">
            Curso mais didático e completo de Java e OO, UML, JDBC, JavaFX,
            Spring Boot, JPA, Hibernate, MySQL, MongoDB e muito mais
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="badge badge-outline rounded-lg">tafareidtrash</div>
          <div className="badge badge-outline rounded-lg">
            niggakonowsnothing
          </div>
          <div className="badge badge-outline rounded-lg">someoneisajack</div>
        </div>
        <div className="text-white py-10">
          <div>
            <p>
              Criado por <a className="link link-primary">Kiwi</a>
            </p>
          </div>
          <div className="text-white flex items-center gap-1 text-sm">
            <CgDanger />
            <p>Última atualização em 06/2024</p>
            <AiOutlineGlobal />
            <p> Português</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-2/4 h-full justify-between items-center">
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
