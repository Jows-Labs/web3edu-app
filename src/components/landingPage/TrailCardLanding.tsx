import { CiGlobe } from "react-icons/ci";
import { FaArrowRight, FaBitcoin, FaDollarSign } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";

export const TrailCardLanding = () => {
  const cardData = [
    {
      icon: <FaBitcoin className="h-1/4 w-auto text-neutral" />,
      text: "Criptomoedas",
    },
    {
      icon: <SiHiveBlockchain className="h-1/4 w-auto text-neutral" />,
      text: "Blockchain",
    },
    {
      icon: <FaDollarSign className="h-1/4 w-auto text-neutral" />,
      text: "Smart Contracts",
    },
    {
      icon: <GrTechnology className="h-1/4 w-auto text-neutral" />,
      text: "DeFi",
    },
    {
      icon: <CiGlobe className="h-1/4 w-auto text-neutral" />,
      text: "RWA",
    },
  ];
  return (
    <div className="flex md:flex-wrap flex-row gap-16 justify-start md:justify-center overflow-x-auto w-full py-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="rounded-box bg-[#F0F0F0] h-36 min-w-64 flex flex-col p-6 items-start gap-7 shadow-xl"
        >
          {card.icon}
          <div className="flex w-full text-blue items-center justify-between">
            <p className="font-medium">{card.text}</p>
            <FaArrowRight className="h-full text-gray cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};
