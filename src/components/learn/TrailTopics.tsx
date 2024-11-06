import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

export const TrailTopics = ({ topics }: { topics: Array<string> }) => {
  return (
    <div className="w-full md:h-full flex items-center justify-center gap-10 md:px-5">
      <div className="w-full h-full flex justify-center items-start text-sm rounded-box">
        <div className="text-neutral flex flex-col gap-3 w-full">
          <p className="font-bold text-neutral text-2xl">
            O que você aprenderá
          </p>
          <div className="gap-2 flex flex-col w-full h-full justify-start items-start">
            <>
              {topics?.map((e, index) => {
                return (
                  <div key={index} className="flex gap-3 items-center w-full">
                    <FaCheck className="md:h-5 min-w-6 h-auto" />
                    <p className="w-fit">{e}</p>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};