"use client";

import { useEffect, useState } from "react";
import { TrailContainer } from "./TrailContainer";
import { TaskList } from "./TaskList";
import { useContent } from "@/providers/content-context";
import { Task } from "../Task/Task";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { RewardContainer } from "../RewardContainer/RewardContainer";

export const Learn = ({ trailIdRt, sectionId }: LearnProps) => {
  const { googleUserInfo } = useWeb3AuthContext();

  const { fetchTrail, trail } = useContent();

  useEffect(() => {
    if (Object.keys(trail).length === 0) {
      fetchTrail(trailIdRt);
    }
  }, [trail, trailIdRt]);

  if (!googleUserInfo || !trailIdRt || Object.keys(trail).length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="md:h-full w-full justify-center items-center flex flex-col md:flex-row sm:px-10 sm:pb-6 md:gap-10 ">
      {sectionId === "trail" ? (
        <TrailContainer trail={trail} />
      ) : (
        <Task sectionId={sectionId} trailId={trail?.trailId} />
      )}

      <TaskList trailId={trail?.trailid} uid={googleUserInfo?.uid} />
    </div>
  );
};
