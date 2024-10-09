import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";
import { TrailCards } from "./TrailContainer";

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
    <>
      <div className="h-full w-11/12 gap-7 mb-8 justify-items-center mt-5 flex-row grid-cols-4 grid">
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
    </>
  );
};
