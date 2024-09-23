import Image from "next/image";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";

export default function KycIntro() {
  return (
    <div className="flex flex-col w-96 h-96 hidden">
      <article className="">
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <p className="text-xs font-medium text-gray-500">Introdução</p>

            <div className="mt-4 overflow-hidden rounded-full bg-gray-200 mb-1">
              <div className="h-1 bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="ss"
            src={web3EduLogo}
            className="size-28 object-fill pb-3 pt-3"
          />

          <div>
            <h3 className="text-lg font-medium text-secondary">
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
