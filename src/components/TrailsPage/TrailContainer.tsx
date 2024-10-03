"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";

export const TrailContainer = ({
  image,
  title,
  icon,
  description,
}: TrailsPageProps) => {
  return (
    <div className="h-3/5 w-full gap-10 flex justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        className="w-80 h-[22rem]"
      >
        <div className="card bg-cgray w-full h-full shadow-xl border-2 border-gray">
          <figure>{image}</figure>
          <div className="card-body p-4 h-32">
            <div className="flex flex-row items-center gap-2 w-full">
              <h2 className="card-title text-dgray">{title}</h2>
              {icon}
            </div>
            <p className="text-left text-dgray">{description}</p>
            <div className="card-actions justify-end">
              <CiStar className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.button>
    </div>
  );
};
