"use client";

import UserImage from "../../assets/images/UserImage.png";
import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MotionButton } from "../ui/Button";

export const UserSection = () => {
  function teste() {
    console.log("teste");
  }
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className=" w-4/5 h-[26rem] md:w-2/5 md:h-[30rem] bg-cgray shadow-xl flex flex-col border-2 border-gray rounded-[2rem] pt-2 md:pt-7 p-7">
        <div className="flex w-full h-12 flex-row justify-center">
          <div
            role="tablist"
            className="tabs tabs-bordered gap-1 md:gap-8 w-full h-4/5"
          >
            <a
              role="tab"
              className="tab hover:tab-active text-xm md:text-lg text-dgray"
            >
              Dados
            </a>
            {/* <a
              role="tab"
              className="tab hover:tab-active text-xm md:text-lg text-dgray"
            >
              Senha
            </a>
            <a
              role="tab"
              className="tab hover:tab-active text-xm text-dgray md:text-lg"
            >
              Acessibilidade
            </a>
            <a
              role="tab"
              className="tab hover:tab-active text-xm text-dgray md:text-lg"
            >
              Privacidade
            </a> */}
          </div>
        </div>
        <div className="flex flex-col flex flex-col gap-6 ">
          <div className="flex h-full md:justify-start justify-center">
            <p className="text-dgray text-md md:text-xl mt-5 font-medium">
              Dados Pessoais
            </p>
          </div>
          <div className="md:flex-row flex-col flex gap-4 justify-between">
            <div className="flex flex-row justify-center items-center">
              <Image
                src={UserImage}
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16  rounded-full"
              />
              <div className="flex flex-col items-left ml-4">
                <p className="text-dgray font-medium text-sm md:text-lg">
                  Martin Burger King
                </p>
                <p className="text-dgray text-sm md:text-base ">
                  @mtburgerking
                </p>
              </div>
            </div>
            <div className="flex h-full justify-center">
              <MotionButton
                Icon={MdEdit}
                label="Editar Imagem"
                func={() => teste}
                className="flex justify-center bg-green text-xs text-ddblue h-7 w-[9rem] items-center md:text-sm md:h-8 md:w-36"
                type="button"
              />
            </div>
          </div>

          <label className="flex flex-row h-full w-full gap-8 justify-center">
            <div className="flex flex-col justify-center w-full">
              <div className="label text-dgray">
                <span className="md:text-sm text-xs  text-dgray">Nome</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">Email</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">
                  Nome de Usuario
                </span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8  bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">Telefone</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
            </div>
          </label>
          <div className="flex md:justify-end justify-center w-full">
            <MotionButton
              Icon={FaSave}
              label="Salvar"
              func={() => teste}
              className=" flex justify-center text-xs items-center  h-7 w-[6rem] bg-green text-ddblue md:text-sm md:h-8 md:w-36"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
