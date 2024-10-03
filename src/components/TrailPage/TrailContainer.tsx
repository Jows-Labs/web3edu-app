"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";

export const TrailCards = () => {
  return (
    <div className="h-3/5 w-full gap-10 flex justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-80 h-[22rem]"
      >
        <div className="card bg-dgray w-full h-full shadow-xl">
          <figure>
            <Image className="object-cover" src={Image1} alt="Shoes" />
          </figure>
          <div className="card-body p-4 h-32">
            <div className="flex flex-row items-center gap-2 w-full">
              <h2 className="card-title">Criptomoedas</h2>
              <SiBitcoinsv className="w-5 h-5" />
            </div>
            <p className="text-left">
              Explore o mundo das criptomoedas, desde seus fundamentos até
              práticas de investimento e segurança
            </p>
            <div className="card-actions justify-end">
              <CiStar className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-80 h-[22rem]"
      >
        <div className="card bg-dgray w-full h-full shadow-xl">
          <figure>
            <Image className="object-cover" src={Image1} alt="Shoes" />
          </figure>
          <div className="card-body p-4 h-32">
            <div className="flex flex-row items-center gap-2 w-full">
              <h2 className="card-title">Criptomoedas</h2>
              <SiBitcoinsv className="w-5 h-5" />
            </div>
            <p className="text-left">
              Explore o mundo das criptomoedas, desde seus fundamentos até
              práticas de investimento e segurança
            </p>
            <div className="card-actions justify-end">
              <CiStar className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-80 h-[22rem]"
      >
        <div className="card bg-dgray w-full h-full shadow-xl">
          <figure>
            <Image className="object-cover" src={Image1} alt="Shoes" />
          </figure>
          <div className="card-body p-4 h-32">
            <div className="flex flex-row items-center gap-2 w-full">
              <h2 className="card-title">Criptomoedas</h2>
              <SiBitcoinsv className="w-5 h-5" />
            </div>
            <p className="text-left">
              Explore o mundo das criptomoedas, desde seus fundamentos até
              práticas de investimento e segurança
            </p>
            <div className="card-actions justify-end">
              <CiStar className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.button>
    </div>
  );
};
