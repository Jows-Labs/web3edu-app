import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";
import Image from "next/image";

export default function Section1() {
  return (
    <div className="h-[80vh] w-full flex flex-col bg-neutralbg">
      <div className="h-[8%] bg-ddblue w-full flex items-center justify-center gap-4">
        <p>Conecte-se ao Futuro: Jornada na Era das Blockchains</p>
        <p className="underline cursor-pointer">Veja as novidades</p>
      </div>
      <div className="h-full w-full p-5 flex justify-around items-center gap-10 text-neutral">
        <div className="flex justify-center items-center whitespace-pre text-4xl">
          <p className="font-semibold w-full leading-relaxed">
            Transforme Conhecimento em <br></br>Oportunidades de{" "}
            <span className="font-bold w-fit h-fit text-neutral bg-cgreen py-0.5 px-2 rounded-box">
              Crescimento
            </span>
          </p>
        </div>
        <Image alt="" src={web3EduLogo} className="h-2/4 w-auto" />
      </div>
    </div>
  );
}
