"use client";

import Image from "next/image";
import web3EduLogo from "../../../public/assets/images/Web3EduBrasil_logo.png";
import { MotionButton } from "../ui/Button";
import { useRouter } from "next/navigation";

const teste = () => {
  console.log("oi");
};

export const ObIntro = ({ handleTabClick }: OnboardingProps<void>) => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex justify-center items-center p-5">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 text-center">
        <Image
          alt="ss"
          src={web3EduLogo}
          className="md:w-36 w-32 h-auto object-fill "
        />
        <div className="text-neutral font-semibold flex flex-col justify-center items-center gap-5">
          <p className="md:text-4xl text-3xl text-dblue">
            Seja bem vindo a Web3EduBrasil!
          </p>
          <p className="md:text-2xl text-xl  text-center">
            Antes de começarmos, vamos entender as funcionalidades da plataforma
            Web3EduBrasil
          </p>
        </div>
        <MotionButton
          label="Avançar"
          type="button"
          func={() => handleTabClick("ObCommu")}
          className="bg-cgreen w-28 text-neutral font-bold"
        />
        <div className="cursor-pointer text-dblue">
          <a onClick={() => router.push("/homePage")}>Pular Introdução</a>
        </div>
      </div>
    </div>
  );
};
