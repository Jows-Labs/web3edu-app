"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";
import { TrailCards } from "./TrailContainer";
import { SearchItem } from "./SearchItem";
import { useContent } from "@/providers/content-context";
import { useEffect } from "react";

export const Trails = () => {
  const { fetchTrailsList, trailsList } = useContent();
  useEffect(() => {
    if (trailsList.length <= 0) {
      fetchTrailsList();
    }
  });

  useEffect(() => {
    console.log(trailsList);
  }, [trailsList]);

  return (
    <div className="flex w-full h-full justify-start items-center flex-col overflow-y-scroll px-12 mt-4">
      <SearchItem />

      <div className="w-full gap-7 mb-8 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trailsList.map((e: any) => {
          return (
            <TrailCards
              image={e.banner}
              title={e.name}
              description={e.resumedDescription}
            />
          );
        })}
      </div>
    </div>
  );
};
