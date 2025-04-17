import web3EduLogo from "../../../public/assets/images/Web3EduBrasil_logo.png";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="w-full flex flex-col bg-neutralbg">
      <div className="bg-ddblue w-full flex items-center justify-center md:text-sm gap-4 py-2 px-4 md:py-4 text-white">
        <p className="md:text-lg text-md max-w-[50%]">
          Conecte-se ao Futuro: Impulsionando a Inovação na Web3
        </p>
        <div className="flex flex-row items-center gap-2">
          <a
            href="https://discord.gg/GJk58TPaDx"
            target="_blank"
            className="underline cursor-pointer"
          >
            Participe da comunidade
          </a>
          <FaDiscord size={30}/>
        </div>
      </div>
      <div className="md:h-full w-full px-5 md:py-20 py-10 flex md:flex-row flex-col md:justify-around items-center gap-10 text-neutral">
        <div className="flex justify-center items-center whitespace-pre md:text-4xl text-xl">
          <p className="font-semibold w-full leading-relaxed">
            Transforme Conhecimento em <br></br>Oportunidades de{" "}
            <span className="font-bold w-fit h-fit text-neutral bg-cgreen py-0.5 px-2 rounded-box">
              Crescimento
            </span>
          </p>
        </div>
        <Image alt="" src={web3EduLogo} className="h-44 md:h-64 w-auto" />
      </div>
    </div>
  );
}
