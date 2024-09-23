import Image from "next/image";
import NoNftIcon from "../../assets/icons/no-certificate.svg";

export const NftsCard = () => {
  return (
    <div className="w-full h-full bg-base-200 shadow-xl rounded-box col-span-3 row-span-2 flex flex-col px-5 py-3 gap-1">
      <div className="flex justify-between text-base-content font-semibold">
        <p>NFT's</p>
        <p className="cursor-pointer">Veja Mais</p>
      </div>
      <div className="bg-base-100 h-full w-full rounded-box flex justify-center items-center flex-col gap-2">
        <Image src={NoNftIcon} alt="No NFTs icon" className="h-2/4" />
        <p className="text-base-content font-medium">
          Você não possui certificações
        </p>
      </div>
    </div>
  );
};
