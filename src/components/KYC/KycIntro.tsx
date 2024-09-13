import Image from "next/image";
import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";

export default function KycIntro() {
  return (
    <div className="flex flex-col w-2/5 ">
      <article className="rounded-box border border-gray-700 bg-base-100 p-4">
        <div>
          <h2 className="sr-only">Steps</h2>

          <div>
            <p className="text-xs font-medium text-gray-500">0/4 - Perguntas</p>

            <div className="mt-4 overflow-hidden rounded-full bg-gray-200 mb-1">
              <div className="h-1 bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <Image alt="ss" src={web3EduLogo} className="size-36" />

          <div>


            <div className="flow-root"></div>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          <fieldset className="space-y-4">
            <legend className="sr-only">Interests</legend>

            <div className="form-control rounded-box border border-gray-700 cursor-pointer hover:border-secondary hover:ring-1">
              
            </div>
          </fieldset>
        </ul>
      </article>
    </div>
  );
}
