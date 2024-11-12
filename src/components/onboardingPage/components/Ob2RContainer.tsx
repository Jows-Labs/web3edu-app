"use client";

import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MotionDiv } from "@/components/ui/MotionDiv";

const teste = () => {
  console.log("oi");
};

const linkDiscord = () => {
  window.open("https://discord.com/invite/GJk58TPaDx", "_blank");
};

const linkTelegram = () => {
  window.open("https://t.me/web3edubrasil", "_blank");
};

const linkInstagram = () => {
  window.open("https://www.instagram.com/web3edubrasil", "_blank");
};

const linkYoutube = () => {
  window.open("https://www.youtube.com/@Web3EduBrasil", "_blank");
};

const linkX = () => {
  window.open("https://x.com/web3edubrasil", "_blank");
};

const linkLinkedin = () => {
  window.open(
    "https://www.linkedin.com/company/web3edubrasil/posts/?feedView=all",
    "_blank"
  );
};

export const Ob2RContainer = () => {
  return (
    <div className="md:w-3/6 w-full h-full flex flex-col p-10">
      <div className="w-full h-[60vh] flex flex-col gap-10 justify-center items-center">
        <div
          onClick={linkDiscord}
          className="md:w-3/5 w-full h-1/5 hover:scale-105 transition duration-300 transform bg-cgray rounded-box text-2xl flex flex-row p-5 justify-center items-center font-semibold text-2xl cursor-pointer"
        >
          <p className="flex flex-row gap-2 justify-center items-center">
            <FaDiscord className="w-12 h-auto text-[#536BF2]" /> Servidor no
            <p className="text-[#536BF2]"> Discord</p>
          </p>
        </div>

        <MotionDiv
          func={() => linkTelegram()}
          className="md:w-3/5 w-full h-1/5  bg-cgray rounded-box text-2xl flex flex-row p-5 justify-center items-center font-semibold text-2xl cursor-pointer"
        >
          <p className="flex flex-row gap-2 justify-center items-center">
            <FaTelegram className="w-12 h-auto text-[#24A1DD]" />
            Grupo no <p className="text-[#24A1DD]"> Telegram</p>
          </p>
        </MotionDiv>
        <p className="font-semibold text-xl">E acompanhe as nossas redes!</p>
      </div>
      <div
        onClick={linkInstagram}
        className="md:w-full w-fit h-fit flex flex-row gap-10 justify-center items-center "
      >
        <div className="md:w-16 w-14 md:h-16 h-14 bg-cgray rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300">
          <FaInstagram className="w-10 h-auto" />
        </div>
        <div
          onClick={linkYoutube}
          className="md:w-16 w-14 md:h-16 h-14 bg-cgray rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaYoutube className="w-10 h-auto text-[#CC0000]" />
        </div>
        <div
          onClick={linkX}
          className="md:w-16 w-14 md:h-16 h-14 bg-cgray rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaXTwitter className="w-10 h-auto" />
        </div>
        <div
          onClick={linkLinkedin}
          className="md:w-16 w-14 md:h-16 h-14 bg-cgray rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition duration-300"
        >
          <FaLinkedinIn className="w-10 h-auto text-[#005C8E]" />
        </div>
      </div>
    </div>
  );
};
