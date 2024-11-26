import Image from "next/image";
import React, { useState } from "react";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";
import { MotionButton } from "../ui/Button";

export default function Kyc1({
  setLevel,
  level,
  handleTabClick,
}: Kyc1Props<void>) {
  return (
    <div className="flex-col flex w-full h-full justify-between">
      <div className="">
        <h2 className="sr-only">Steps</h2>

        <div>
          <p className="text-xs font-medium text-gray">1/2 - Perguntas</p>

          <div className="mt-4 overflow-hidden rounded-full h-1 bg-dgray/20 mb-1">
            <div className="h-1 w-2/4 rounded-full bg-cgreen"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center self-center mt-2">
        <div className="flex gap-2 align-center justify-center">
          <div className="flex-col self-center flex">
            <div>
              <h3 className="text-xl font-medium text-neutral">
                Em relação a tecnologia Web3, você se considera:{" "}
              </h3>

              <div className="flow-root"></div>
            </div>
          </div>
          <Image
            alt="ss"
            src={web3EduLogo}
            className="w-16 h-12 object-fill "
          />
        </div>

        <ul className="mt-4 space-y-2 ">
          <li>
            <a
              href="#"
              className={`block h-full rounded-box shadow-lg p-4  ${
                level === "begginer" ? "border border-green" : ""
              }`}
              onClick={() => setLevel("begginer")}
            >
              <strong className="font-bold text-dblue">Iniciante</strong>

              <p className="mt-1 text-xs font-medium text-gray">
                Você não possui conhecimentos sobre a tecnologia Web3.
              </p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`block h-full rounded-box shadow-lg p-4 ${
                level === "intermediate" ? "border border-green" : ""
              }`}
              onClick={() => setLevel("intermediate")}
            >
              <strong className="font-bold text-dblue">Intermediário</strong>

              <p className="mt-1 text-xs font-medium text-gray">
                Você possui conhecimento básico sobre a Web3.
              </p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`block h-full rounded-box shadow-lg p-4 ${
                level === "advanced" ? "border border-green" : ""
              }`}
              onClick={() => setLevel("advanced")}
            >
              <strong className="font-bold text-dblue ">Avançado</strong>

              <p className="mt-1 text-xs font-medium text-gray">
                Você já se considera uma pessoa experiente sobre a tecnologia
                Web3.
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div className=" w-full justify-center mt-8 flex">
        <MotionButton
          label="Avançar"
          type="button"
          func={() => handleTabClick("Kyc2")}
          className="bg-cgreen w-3/5 text-neutral font-semibold"
        />
      </div>
    </div>
  );
}
