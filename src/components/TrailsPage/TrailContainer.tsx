"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";

export const TrailCards = ({ image, title, description }: TrailsPageProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="w-full h-80"
    >
      <div className="card bg-cgray w-full h-full shadow-xl border-2 border-gray overflow-hidden">
        <img
          src={image}
          className="h-[40%]"
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="card-body p-4 h-full">
          <div className="flex flex-row items-center gap-2 w-full">
            <h2 className="card-title text-dgray">{title}</h2>
          </div>
          <p className="text-left text-dgray flex items-center">
            {description}
          </p>
          <div className="card-actions justify-end">
            <CiStar className="h-5 w-5 text-ddblue" />
          </div>
        </div>
      </div>
    </motion.button>
  );
};
