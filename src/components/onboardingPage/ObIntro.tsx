"use client";

import Image from "next/image";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";
import { MotionButton } from "../ui/Button";

const teste = () => {
    console.log("oi");
}

export const ObIntro = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-5">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 text-center">
        <Image
          alt="ss"
          src={web3EduLogo}
          className="md:w-36 w-32 h-auto object-fill "
        />
        <div className="text-neutral font-semibold flex flex-col justify-center items-center gap-5">
          <p className="md:text-4xl text-3xl text-dblue">Seja bem vindo ao Web3EduBrasil!</p>
          <p className="md:text-2xl text-xl text-start">
            Nossa plataforma oferece tanana tanana tanana tanana <br></br>
            tanana tanana tananat aananany annyayyann ayananna
          </p>
        </div>
        <MotionButton
            label="Avançar"
            type="button"
            func={teste}
            className="bg-cgreen w-28 text-neutral font-bold"
          />
      </div>
    </div>
  );
};
