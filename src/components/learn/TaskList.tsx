"use client";

import { useContent } from "@/providers/content-context";
import { TaskUnits } from "../Task/TaskUnits";
import { useEffect, useState } from "react";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useParams } from "next/navigation";

export const TaskList = ({
  trailId,
  uid,
}: {
  trailId: string;
  uid: string;
}) => {
  const { fetchTrailSections, trailSections } = useContent();
  const { trailIdRt }: any = useParams();

  useEffect(() => {
    if (Object.keys(trailSections).length === 0) {
      fetchTrailSections(trailIdRt, uid);
    }
  }, [trailId, trailIdRt]);

  return (
    <div className="md:w-2/5 w-full h-full bg-cgray md:rounded-box p-8 md:overflow-y-auto gap-2 flex flex-col justify-start items-start">
      {Object.keys(trailSections).length !== 0 ? (
        trailSections.map((section: any, index: any) => (
          <TaskUnits
            text={section.title}
            id={section.id}
            done={section.done}
            key={index}
            trailId={trailIdRt}
          />
        ))
      ) : (
        <>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-32 w-full"></div>
        </>
      )}
    </div>
  );
};
