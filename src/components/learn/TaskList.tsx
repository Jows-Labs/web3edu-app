"use client";

import { useContent } from "@/providers/content-context";
import { TaskUnits } from "../taskPage/TaskUnits";
import { useEffect, useState } from "react";

export const TaskList = ({ trailId }: { trailId: string }) => {
  const { fetchTrailSections } = useContent();
  const [trailSections, setTrailSections] = useState<any[]>([]);

  const fetchData = async () => {
    const trailData: any = await fetchTrailSections(trailId);
    setTrailSections(trailData || []);
  };

  useEffect(() => {
    if (trailSections.length === 0) {
      fetchData();
    }
  }, [trailId, fetchTrailSections]);

  return (
    <div className="md:w-2/5 w-full h-full bg-cgray md:rounded-box p-8 md:overflow-y-auto gap-2 flex flex-col justify-start items-start">
      <>
        {trailSections.map((section: any, index: any) => (
          <TaskUnits text={section.title} key={index} />
        ))}
      </>
    </div>
  );
};
