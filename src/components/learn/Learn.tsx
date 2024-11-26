import { useEffect, useState } from "react";
import { TrailContainer } from "./TrailContainer";
import { TaskList } from "./TaskList";
import { useContent } from "@/providers/content-context";
import { Task } from "../Task/Task";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

export const Learn = ({ trailIdRt, sectionId }: LearnProps) => {
  const { googleUserInfo } = useWeb3AuthContext();

  const { fetchTrail, trail } = useContent();

  useEffect(() => {
    if (Object.keys(trail).length === 0) {
      fetchTrail(trailIdRt);
    }
  }, [trail, trailIdRt]);

  return (
    <div className="md:h-full w-full justify-center items-center flex flex-col md:flex-row sm:px-10 sm:pb-6 md:gap-10 ">
      {!googleUserInfo || !trailIdRt || Object.keys(trail).length === 0 ? (
        <div className="md:w-3/5 w-full md:h-full flex flex-col justify-start items-start bg-cgray md:rounded-box p-10 md:gap-3 gap-6 md:overflow-y-auto">
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="skeleton h-full w-full"></div>
          <div className="skeleton h-full w-full"></div>
        </div>
      ) : sectionId === "trail" ? (
        <TrailContainer trail={trail} />
      ) : (
        <Task sectionId={sectionId} trailId={trail?.trailId} />
      )}
      <TaskList trailId={trail?.trailid} uid={googleUserInfo?.uid} />
    </div>
  );
};
