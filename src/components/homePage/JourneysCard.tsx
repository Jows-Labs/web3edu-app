import { FaCheck } from "react-icons/fa6";

export const JourneysCard = () => {
  return (
    <div className="w-full lg:h-full h-72 lg:col-span-2 lg:row-span-3 flex flex-col gap-3">
      <p className="font-bold text-2xl">Jornada do usuário</p>
      <div className="w-full lg:h-full h-full bg-cgray border-[1.5px] border-gray rounded-box flex flex-col">
        <div className="h-1/4 border-b-[1.5px] border-gray flex items-center px-7 justify-between cursor-pointer">
          <p className="text-lg font-bold">Preencher dados do perfil</p>{" "}
          <FaCheck className="h-8 w-auto" />
        </div>
        <div className="h-1/4 border-b-[1.5px] border-gray flex items-center px-7 justify-between cursor-pointer">
          <p className="text-lg font-bold">Pesquisa de perfil</p>{" "}
          <FaCheck className="h-8 w-auto" />
        </div>
        <div className="h-1/4 border-b-[1.5px] border-gray flex items-center px-7 justify-between cursor-pointer">
          <p className="text-lg font-bold">Resgatar NFT de boas-vindas</p>{" "}
          <FaCheck className="h-8 w-auto" />
        </div>
        <div className="h-1/4 border-gray flex items-center px-7 justify-between cursor-pointer">
          <p className="text-lg font-bold">Completar uma trilha</p>{" "}
          <FaCheck className="h-8 w-auto" />
        </div>
      </div>
    </div>
  );
};
