import UserImage from "../../assets/images/UserImage.png";
import Image from "next/image";

export const UserSection = () => {
  return (
    <div className="w-2/4 h-2/4 bg-cgray shadow-xl  border-2 border-gray rounded-box">
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
      <div className="flex flex-col ml-8 mt-6">
        <div className="flex mb-4 ">
          <p className="text-dgray text-xl font-medium">Dados Pessoais</p>
        </div>
        <div className="flex-row flex">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={UserImage}
              alt=""
              className="w-full h-full w-24 rounded-full"
            />
            <div className="flex flex-col items-left ml-4">
              <p className="text-dgray font-medium">Martin Burger King</p>
              <p className="text-dgray ">@mtburgerking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
