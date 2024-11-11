"use client";

import { FaDiscord } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const teste = () => {
  console.log("oi");
};

export const Ob2RContainer = () => {
  return (
    <div className="w-3/6 h-full flex flex-col p-10">
      <div className="w-full h-[60vh] flex flex-col gap-10 justify-center items-center">
        <div className="w-3/5 h-1/5 bg-cgray rounded-box text-2xl flex flex-row p-5 justify-center items-center font-semibold text-2xl">
          <p className="flex flex-row gap-2 justify-center items-center">
            <FaDiscord className="w-12 h-auto text-[#536BF2]" /> Servidor no{" "}
            <p className="text-[#536BF2]"> Discord</p>
          </p>
        </div>
        <div className="w-3/5 h-1/5 bg-cgray rounded-box text-2xl flex flex-row p-5 justify-center items-center font-semibold text-2xl">
          <p className="flex flex-row gap-2 justify-center items-center">
            <FaTelegram className="w-12 h-auto text-[#24A1DD]" />
            Grupo no <p className="text-[#24A1DD]"> Telegram</p>
          </p>
        </div>
        <p className="font-semibold text-xl">E acompanhe as nossas redes!</p>
      </div>
      <div className="w-full h-fit flex flex-row gap-10 justify-center items-center">
        <div className="w-16 h-16 bg-cgray rounded-full flex justify-center items-center">
          <FaInstagram className="w-10 h-auto" />
        </div>
        <div className="w-16 h-16 bg-cgray rounded-full flex justify-center items-center">
          <FaYoutube className="w-10 h-auto" />
        </div>
        <div className="w-16 h-16 bg-cgray rounded-full flex justify-center items-center"></div>
        <div className="w-16 h-16 bg-cgray rounded-full flex justify-center items-center"></div>
      </div>
    </div>
  );
};
