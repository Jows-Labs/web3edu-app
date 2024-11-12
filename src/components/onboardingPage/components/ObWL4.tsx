import web3EduLogo from "../../../assets/images/Web3EduBrasil_logo.png";
import Image from "next/image";

export const ObWL4 = () => {
  return (
    <div className="md:w-3/6 w-full h-full bg-cgray flex p-10">
      <div className="w-full h-full flex flex-col gap-10 justify-center items-start">
        <Image alt="ss" src={web3EduLogo} className="w-28 h-auto" />
        <div className="font-semibold flex flex-col gap-8">
          <p className="text-5xl text-dblue">Tudo Pronto!</p>
          <p className="text-2xl">
            Ótimo! Agora que as configurações estão concluídas, você está pronto
            para criar sua conta e começar a explorar nossas trilhas de
            aprendizagem. Vamos lá?
          </p>
          <p className="text-cgrey">
            (Este tutorial estará disponível na aba "Ajuda" para que você possa
            acessá-lo sempre que precisar.)
          </p>
        </div>
      </div>
    </div>
  );
};
