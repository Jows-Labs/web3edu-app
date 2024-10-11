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
    <div className="w-2/4 h-[33rem] bg-cgray shadow-xl flex flex-col border-2 border-gray rounded-[2rem] p-5">
      <div className="flex flex-row m-4 gap-8 justify-center">
        <div role="tablist" className="tabs tabs-bordered gap-8">
          <a role="tab" className="tab hover:tab-active text-lg text-dgray">
            Dados
          </a>
          <a role="tab" className="tab hover:tab-active text-lg text-dgray">
            Senha
          </a>
          <a role="tab" className="tab hover:tab-active text-dgray text-lg">
            Acessibilidade
          </a>
          <a role="tab" className="tab hover:tab-active text-dgray text-lg">
            Privacidade
          </a>
        </div>
      </div>
      <div className="flex flex-col flex flex-col gap-6 ">
        <div className="flex">
          <p className="text-dgray text-2xl font-medium">Dados Pessoais</p>
        </div>
        <div className="flex-row flex justify-between">
          <div className="flex flex-row justify-center items-center">
            <Image src={UserImage} alt="" className=" w-20 h-20 rounded-full" />
            <div className="flex flex-col items-left ml-4">
              <p className="text-dgray font-medium text-xl">
                Martin Burger King
              </p>
              <p className="text-dgray ">@mtburgerking</p>
            </div>
          </div>
          <MotionButton
            Icon={MdEdit}
            label="Editar Imagem"
            func={() => teste}
            className="bg-green text-ddblue h-9 items-center w-40"
            type="button"
          />
        </div>
        <label className="flex flex-row h-full w-full gap-8 justify-center">
          <div className="flex flex-col w-full">
            <div className="label">
              <span className="label-text text-dgray">Nome</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs bg-white rounded-box border-2 border-gray text-dgray"
            />
            <div className="label">
              <span className="label-text text-dgray">Email</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs bg-white rounded-box border-2 border-gray text-dgray"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="label">
              <span className="label-text text-dgray">Nome de Usuario</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs bg-white rounded-box border-2 border-gray text-dgray"
            />
            <div className="label">
              <span className="label-text text-dgray">Telefone</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full max-w-xs bg-white rounded-box border-2 border-gray text-dgray"
            />
          </div>
        </label>
        <div className="flex justify-end w-full">
          <MotionButton
            Icon={FaSave}
            label="Salvar"
            func={() => teste}
            className="bg-green text-ddblue"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};
