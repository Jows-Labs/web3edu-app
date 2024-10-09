import UserImage from "../../assets/images/UserImage.png";
import Image from "next/image";
import { IMaskInput } from "react-imask";

export const UserSection = () => {
  return (
    <div className="w-2/4 h-[33rem] bg-cgray shadow-xl  border-2 border-gray rounded-box">
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
      <div className="flex flex-col ml-8 mt-12">
        <div className="flex mb-8 ">
          <p className="text-dgray text-2xl font-medium">Dados Pessoais</p>
        </div>
        <div className="flex-row flex">
          <div className="flex flex-row justify-center items-center">
            <Image src={UserImage} alt="" className=" w-20 h-20 rounded-full" />
            <div className="flex flex-col items-left ml-4">
              <p className="text-dgray font-medium text-xl">
                Martin Burger King
              </p>
              <p className="text-dgray ">@mtburgerking</p>
            </div>
            <button className="btn btn-sm ml-14 text-dblue bg-cyellow hover:bg-dyellow">
              Editar Imagem
            </button>
          </div>
        </div>
        <label className="flex flex-row h-full w-full gap-8 mt-6 justify-center">
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
      </div>
    </div>
  );
};
