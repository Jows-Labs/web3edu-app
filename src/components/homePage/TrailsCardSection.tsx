import { FaBitcoin, FaDollarSign } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { TrailCardHome } from "./TrailCardHome";

export const TrailsCardSection = () => {
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
  ];

  return (
    <div className="w-full h-full flex flex-col border-gray rounded-box col-span-3 row-span-3 justify-between">
      {cardData.map((e, index) => {
        return <TrailCardHome />;
      })}
    
    </div>
  );
};
