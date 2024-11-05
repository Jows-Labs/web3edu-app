"use client";

import { useEffect, useState } from "react";
import { TrailContainer } from "./TrailContainer";
import { TaskList } from "./TaskList";
import { useContent } from "@/providers/content-context";

export const Learn = ({ trailId }: { trailId: string }) => {
  const { fetchTrail } = useContent();
  const [trail, setTrail] = useState<any>({});

  const fetchData = async () => {
    const trailData = await fetchTrail(trailId);
    console.log(trailData);
    setTrail(trailData);
  };

  useEffect(() => {
    if (Object.keys(trail).length === 0) {
      fetchData();
    }
  }, [trailId, fetchTrail]);
  return (
    <div className="md:h-full w-full justify-center items-center flex flex-col md:flex-row sm:px-10 sm:pb-6 md:gap-10 ">
      <TrailContainer trail={trail} />
      <TaskList trailId={trailId} />
    </div>
  );
};
