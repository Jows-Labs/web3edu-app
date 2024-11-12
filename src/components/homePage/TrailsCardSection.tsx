import { FaBitcoin, FaDollarSign } from "react-icons/fa";
import { SiHive, SiHiveBlockchain } from "react-icons/si";
import { TrailCardHome } from "./TrailCardHome";

export const TrailsCardSection = () => {
  const cardData = [
    {
      Icon: FaBitcoin,
      text: "Criptomoedas",
      progress: 30,
    },
    {
      Icon: SiHiveBlockchain,
      text: "Blockchain",
      progress: 20,
    },
    {
      Icon: SiHive,
      text: "Smart Contracts",
      progress: 90,
    },
  ];

  return (
    <div className="w-full lg:h-full h-80 flex flex-col border-gray rounded-box lg:col-span-3 lg:row-span-3 justify-between">
      {cardData.map((e, index) => {
        return (
          <TrailCardHome
            Icon={e.Icon}
            text={e.text}
            progress={e.progress}
            key={index}
          />
        );
      })}
    </div>
  );
};
