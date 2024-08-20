import Image from "next/image";
import web3EduLogo from "../../images/Web3EduBrasil_logo.png";

export default function Kyc1() {
  return (
    <div className="flex flex-col min-h-screen w-2/5 ">
      <article className="rounded-box border border-gray-700 bg-base-100 p-4">
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <p className="text-xs font-medium text-gray-500">1/4 - Perguntas</p>

            <div className="mt-4 overflow-hidden rounded-full bg-gray-200 mb-1">
              <div className="h-1 w-1/4 rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image alt="ss" src={web3EduLogo} className="size-12  " />

          <div>
            <h3 className="text-lg font-medium text-secondary">
              Em relação a tecnologia Web3, você se considera:{" "}
            </h3>

            <div className="flow-root"></div>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="block h-full rounded-box border border-gray-700 p-4 hover:border-secondary"
            >
              <strong className="font-bold text-secondary">Iniciante</strong>

              <p className="mt-1 text-xs font-medium text-neutral">
                Você não possui conhecimentos sobre a tecnologia Web3.
              </p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-full rounded-box border border-gray-700 p-4 hover:border-secondary"
            >
              <strong className="font-bold text-secondary">
                Intermediário
              </strong>

              <p className="mt-1 text-xs font-medium text-neutral">
                Você possui conhecimento básico sobre a Web3.
              </p>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-full rounded-box border border-gray-700 p-4 hover:border-secondary"
            >
              <strong className="font-bold text-secondary ">Avançado</strong>

              <p className="mt-1 text-xs font-medium text-neutral">
                Você já se considera uma pessoa experiente sobre a tecnologia
                Web3.
              </p>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
