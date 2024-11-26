"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";
import { TrailCards } from "./TrailContainer";
import { TrailsPgTop } from "./TrailsPgTop";
import { useContent } from "@/providers/content-context";
import { useEffect, useState } from "react";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import KnowLedge from "../KYC/KnowYourCostumer";

export const Trails = () => {
  const { fetchTrailsList, trailsList } = useContent();
  const { googleUserInfo } = useWeb3AuthContext();
  const [filteredTrails, setFilteredTrails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (trailsList.length <= 0 && googleUserInfo !== null) {
      fetchTrailsList(googleUserInfo?.uid);
    }
  }, [googleUserInfo]);

  useEffect(() => {
    const filtered = trailsList.filter((trail: any) =>
      trail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrails(filtered);
    console.log(filteredTrails);
  }, [searchTerm]);

  return (
    <div className="flex w-full h-full justify-start items-center flex-col overflow-y-scroll px-12 mt-4">
      <TrailsPgTop searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="w-full h-full gap-7 mb-8 mt-5 flex flex-wrap">
        {filteredTrails.length !== 0 ? (
          filteredTrails.map((e: any, index: any) => {
            return (
              <TrailCards
                key={index}
                id={e.id}
                image={e.banner}
                title={e.name}
                description={e.resumedDescription}
              />
            );
          })
        ) : (
          <div className="w-full min-h-full flex items-center justify-center">
            <p className="text-3xl text-gray/80 font-bold">
              Nenhuma trilha encontrada 🤨
            </p>
          </div>
        )}
      </div>
      {/* <KnowLedge /> */}
    </div>
  );
};
