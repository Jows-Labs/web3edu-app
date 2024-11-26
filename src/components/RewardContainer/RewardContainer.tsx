"use client";

import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { MotionButton } from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { IconButton } from "../ui/IconButton";
import { useContent } from "@/providers/content-context";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "next/router";
import { useParams, useRouter } from "next/navigation";

export const RewardContainer = () => {
  const router = useRouter();

  const {
    handleRewardContainer,
    rewardContainerVisibility,
    fetchTrailAirDrop,
    trail,
  } = useContent();
  const { googleUserInfo, userAccount } = useWeb3AuthContext();

  const texts = [
    {
      texto0: `Olá, ${googleUserInfo?.displayName}!`,
      text1:
        "Todo o seu empenho e dedicação não passaram despercebidos. Para celebrar essa conquista, você receberá um token NFT como recompensa! Esse token simboliza tudo o que você aprendeu e o seu compromisso em cada etapa dessa trilha.",
    },
  ];

  function teste() {
    toast.success("NFT Enviado com Sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    fetchTrailAirDrop(
      "https://ipfs.io/ipfs/QmZMBnu9vShWJdmxciWg2Ji6di3sKMKvq8cDT7X5uSB6AN",
      googleUserInfo?.uid,
      googleUserInfo?.displayName,
      userAccount[0],
      trail?.trailId,
      trail?.name
    );
    handleRewardContainer();
  }

  useEffect(() => {
    console.log(trail);
  }, [trail]);
  return (
    <div
      className={`w-full min-h-full bg-black/50 flex justify-center items-center text-neutral absolute z-20 top-0 px-5 md:px-0 ${
        rewardContainerVisibility ? "visible" : "invisible"
      }`}
    >
      <div className="md:w-96 w-full h-fit flex flex-col rounded-box py-5 px-6 gap-4 bg-cgray shadow-lg font-semibold items-start cursor-default">
        {texts.map((e, index) => {
          return (
            <div className="flex flex-col gap-4" key={index}>
              <div className="flex justify-between w-full items-center">
                <p>{e.texto0}</p>
                <IconButton
                  Icon={RxCross2}
                  func={() => handleRewardContainer()}
                  className="h-5"
                />
              </div>
              <p>{e.text1}</p>
            </div>
          );
        })}
        <MotionButton
          rightIcon={true}
          label="Resgatar Agora!"
          type="button"
          className="bg-green text-neutral w-full h-12 self-end font-semibold text-md"
          func={() => teste()}
        />
      </div>
    </div>
  );
};
