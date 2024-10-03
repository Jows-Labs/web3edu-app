import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";
import { TrailContainer } from "./TrailContainer";

export const Trails = () => {
  const trailsCard = [
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
      {trailsCard.map((e) => {
        return (
          <TrailContainer
            image={e.image}
            title={e.title}
            description={e.description}
            icon={e.icon}
          />
        );
      })}
    </>
  );
};
