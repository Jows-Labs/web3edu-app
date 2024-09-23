import Image from "next/image";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";

export default function Kyc2() {
  return (
    <div className=" flex-col w-full h-full hidden ">
      <article className="">
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <p className="text-xs font-medium text-gray">2/4 - Perguntas</p>

            <div className="mt-4 overflow-hidden rounded-full bg-cgray mb-1">
              <div className="h-1 w-2/4 rounded-full bg-cgreen"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Image
            alt="ss"
            src={web3EduLogo}
            className="w-16 h-12 object-fill "
          />

          <div>
            <h3 className="text-lg font-medium text-neutral">
              Quais os seus maiores interesses?{" "}
            </h3>

            <div className="flow-root"></div>
          </div>
        </div>

        <ul className="mt-4 space-y-2 pb-5">
          <fieldset className="space-y-4">
            <legend className="sr-only">Interests</legend>

            <div className="form-control rounded-box border border-dgray cursor-pointer hover:border-dgreen hover:ring-1">
              <label
                htmlFor="criptomoedas-checkbox"
                className="label cursor-pointer h-full w-full p-4"
              >
                <span className="label-text font-medium text-dblue">
                  Criptomoedas
                </span>
                <input
                  type="checkbox"
                  id="criptomoedas-checkbox"
                  className="checkbox checkbox-dblue"
                />
              </label>
            </div>

            <div className="form-control rounded-box border border-dgray  cursor-pointer hover:border-dgreen hover:ring-1">
              <label className="label cursor-pointer p-4">
                <span className="label-text font-medium text-dblue">
                  Blockchain
                </span>
                <input type="checkbox" className="checkbox checkbox-dblue" />
              </label>
            </div>

            <div className="form-control rounded-box border border-dgray  cursor-pointer hover:border-dgreen hover:ring-1">
              <label className="label cursor-pointer p-4">
                <span className="label-text font-medium text-dblue">RWA</span>
                <input type="checkbox" className="checkbox checkbox-dblue" />
              </label>
            </div>

            <div className="form-control rounded-box border border-dgray cursor-pointer hover:border-dgreen hover:ring-1">
              <label className="label cursor-pointer p-4">
                <span className="label-text font-medium text-dblue">
                  Smart Contracts
                </span>
                <input type="checkbox" className="checkbox checkbox-dblue" />
              </label>
            </div>

            <div className="form-control rounded-box border border-dgray cursor-pointer hover:border-dgreen hover:ring-1">
              <label className="label cursor-pointer p-4">
                <span className="label-text font-medium text-dblue">DeFi</span>
                <input type="checkbox" className="checkbox checkbox-dblue" />
              </label>
            </div>
          </fieldset>
        </ul>
      </article>
    </div>
  );
}
