import web3EduLogo from "../../images/Web3EduBrasil_logo.png";
import Image from "next/image";
function KnowLedge() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col min-h-screen w-2/5 ">
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <div>
            <h2 className="sr-only">Steps</h2>

            <div>
              <p className="text-xs font-medium text-gray-500">
                1/4 - Perguntas
              </p>

              <div className="mt-4 overflow-hidden rounded-full bg-gray-200 mb-1">
                <div className="h-1 w-1/4 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="ss"
              src={web3EduLogo}
              className="size-16 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium text-white">
                Em relação a tecnologia Web3, você se considera:{" "}
              </h3>

              <div className="flow-root"></div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600"
              >
                <strong className="font-medium text-white">Iniciante</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Você não possui conhecimentos sobre a tecnologia Web3.
                </p>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600"
              >
                <strong className="font-medium text-white">
                  Intermediário
                </strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Você possui conhecimento básico sobre a Web3.
                </p>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-green-600"
              >
                <strong className="font-medium text-white">Avançado</strong>

                <p className="mt-1 text-xs font-medium text-gray-300">
                  Você já se considera uma pessoa experiente sobre a tecnologia
                  Web3.
                </p>
              </a>
            </li>
          </ul>
        </article>
      </div>

      {/* CARD 2 */}

      <div className="flex flex-col min-h-screen w-2/5 ">
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
          <div>
            <h2 className="sr-only">Steps</h2>

            <div>
              <p className="text-xs font-medium text-gray-500">
                2/4 - Perguntas
              </p>

              <div className="mt-4 overflow-hidden rounded-full bg-gray-200 mb-1">
                <div className="h-1 w-2/4 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="ss"
              src={web3EduLogo}
              className="size-16 rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-medium text-white">
                Quais os seus maiores interesses?{" "}
              </h3>

              <div className="flow-root"></div>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            <fieldset className="space-y-4">
              <legend className="sr-only">Interests</legend>

              <div>
                <label
                  htmlFor="Cripto"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-700 p-4 text-sm font-medium shadow-sm hover:border-green-600 hover:ring-1 hover:ring-green-600 checked:border-green-600 checked:ring-1 checked:ring-green-600"
                >
                  <div>
                    <p className="text-white">Criptomoedas</p>
                  </div>
                  <input
                    type="checkbox"
                    name="Interests"
                    value="Cripto"
                    id="Cripto"
                    className="size-5 border-gray-300 text-green-600"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="Blockchain"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-700 p-4 text-sm font-medium shadow-sm hover:border-green-600 hover:ring-1 hover:ring-green-600 checked:border-green-600 checked:ring-1 checked:ring-green-600"
                >
                  <div>
                    <p className="text-white">Blockchain</p>
                  </div>
                  <input
                    type="checkbox"
                    name="Interests"
                    value="Blockchain"
                    id="Blockchain"
                    className="size-5 border-gray-300 text-green-600"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="RWA"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-700 p-4 text-sm font-medium shadow-sm hover:border-green-600 hover:ring-1 hover:ring-green-600 checked:border-green-600 checked:ring-1 checked:ring-green-600"
                >
                  <div>
                    <p className="text-white">RWA</p>
                  </div>
                  <input
                    type="checkbox"
                    name="Interests"
                    value="RWA"
                    id="RWA"
                    className="size-5 border-gray-300 text-green-600"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="SmartContracts"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-700 p-4 text-sm font-medium shadow-sm hover:border-green-600 hover:ring-1 hover:ring-green-600 checked:border-green-600 checked:ring-1 checked:ring-green-600"
                >
                  <div>
                    <p className="text-white">Smart Contracts</p>
                  </div>
                  <input
                    type="checkbox"
                    name="Interests"
                    value="SmartContracts"
                    id="SmartContracts"
                    className="size-5 border-gray-300 text-green-600"
                  />
                </label>
              </div>

              <div>
                <label
                  htmlFor="DeFi"
                  className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-700 p-4 text-sm font-medium shadow-sm hover:border-green-600 hover:ring-1 hover:ring-green-600 checked:border-green-600 checked:ring-1 checked:ring-green-600"
                >
                  <div>
                    <p className="text-white">DeFi</p>
                  </div>
                  <input
                    type="checkbox"
                    name="Interests"
                    value="DeFi"
                    id="DeFi"
                    className="size-5 border-gray-300 text-green-600"
                  />
                </label>
              </div>
            </fieldset>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default KnowLedge;
