import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";
import { TrailCards } from "./TrailContainer";
import { SearchItem } from "./SearchItem";

export const Trails = () => {
  const trailsCard = [
    {
      image: <Image className="object-cover" src={Image1} alt="Shoes" />,
      title: "Criptomoedas",
      icon: <SiBitcoinsv className="w-5 h-5 text-dgray" />,
      description:
        "Explore o mundo das criptomoedas, desde seus fundamentos até práticas de investimento e segurança",
    },
    {
      image: <Image className="object-cover" src={Image1} alt="Shoes" />,
      title: "Criptomoedas",
      icon: <SiBitcoinsv className="w-5 h-5 text-dgray" />,
      description:
        "Explore o mundo das criptomoedas, desde seus fundamentos até práticas de investimento e segurança",
    },
    {
      image: <Image className="object-cover" src={Image1} alt="Shoes" />,
      title: "Criptomoedas",
      icon: <SiBitcoinsv className="w-5 h-5 text-dgray" />,
      description:
        "Explore o mundo das criptomoedas, desde seus fundamentos até práticas de investimento e segurança",
    },
    {
      image: <Image className="object-cover" src={Image1} alt="Shoes" />,
      title: "Criptomoedas",
      icon: <SiBitcoinsv className="w-5 h-5 text-dgray" />,
      description:
        "Explore o mundo das criptomoedas, desde seus fundamentos até práticas de investimento e segurança",
    },
    {
      image: <Image className="object-cover" src={Image1} alt="Shoes" />,
      title: "Criptomoedas",
      icon: <SiBitcoinsv className="w-5 h-5 text-dgray" />,
      description:
        "Explore o mundo das criptomoedas, desde seus fundamentos até práticas de investimento e segurança",
    },
  ];
  return (
    <div className="flex w-full h-full justify-start items-center flex-col overflow-y-scroll px-12 mt-4">
      <SearchItem />

      <div className="w-full gap-7 mb-8 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trailsCard.map((e) => {
          return (
            <TrailCards
              image={e.image}
              title={e.title}
              description={e.description}
              icon={e.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
