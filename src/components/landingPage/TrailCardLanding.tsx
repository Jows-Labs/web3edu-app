import { CiGlobe } from "react-icons/ci";
import { FaArrowRight, FaBitcoin, FaDollarSign } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { MotionDiv } from "../ui/MotionDiv";

export const TrailCardsLanding = () => {
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
<div className="flex flex-wrap gap-12 justify-center w-full py-8 mb-5">
  {cardData.map((card, index) => (
    <MotionDiv
      key={index}
      className="rounded-box bg-[#F0F0F0] h-28 flex flex-col p-4 items-start gap-5 shadow-xl min-w-[calc(20%-1rem)]" 
    >
      {card.icon}
      <div className="flex w-full text-blue items-center justify-between">
        <p className="font-medium">{card.text}</p>
        <FaArrowRight className="h-full text-gray cursor-pointer" />
      </div>
    </MotionDiv>
  ))}
</div>




  );
};
