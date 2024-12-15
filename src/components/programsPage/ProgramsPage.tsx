"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";
import Image1 from "../../assets/images/criptoTest.jpg";

import { useContent } from "@/providers/content-context";
import { useEffect, useState } from "react";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import KnowLedge from "../KYC/KnowYourCostumer";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ProgramCard } from "./ProgramCard";

export const Programs = () => {
  const { fetchProgramsList, programsList } = useContent();
  const { userDbInfo } = useWeb3AuthContext();
  const [filteredTrails, setFilteredTrails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const { isLoggedIn } = useWeb3AuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      toast.warning("Faça login para acessar esta tela");
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (programsList.length <= 0) {
      fetchProgramsList();
    }
  }, [programsList]);

  return (
    <div className="flex w-full h-full justify-start items-start flex-col overflow-y-scroll px-12 mt-4 gap-4">
      <p className="font-bold lg:text-3xl text-2xl text-center text-nowrap md:order-first order-last">
        Programs
      </p>
      {programsList.length !== 0 ? (
        programsList.map((e: any, index: any) => {
          return (
            <ProgramCard
              key={index}
              id={e.id}
              image={e.banner}
              title={e.title}
              description={e.resumedDescription}
            />
          );
        })
      ) : (
        <div className="w-full min-h-full flex items-center justify-center">
          <p className="text-3xl text-gray/80 font-bold">
            No programs found 🤨
          </p>
        </div>
      )}
    </div>
  );
};
