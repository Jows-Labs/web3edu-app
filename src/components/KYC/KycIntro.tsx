import Image from "next/image";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";

export default function KycIntro() {
  return (
    <div className="flex flex-col w-96 h-96 ">
      <article className="">
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <p className="text-xs font-medium text-gray">Introdução</p>

            <div className="mt-4 overflow-hidden rounded-full bg-cgray mb-1">
              <div className="h-1 bg-cgray"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-center">
          <Image
            alt="ss"
            src={web3EduLogo}
            className="size-28 object-fill pb-3 pt-3"
          />

          <div>
            <h3 className="text-lg font-medium text-dblue">
              Bem vindo a nossa plataforma, iremos te fazer umas perguntas para
              ajustar as nossas recomendações com base nos seus gostos e
              necessidades
            </h3>
          </div>
        </div>
      </article>
    </div>
  );
}
