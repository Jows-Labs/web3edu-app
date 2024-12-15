"use client";

import { CiStar } from "react-icons/ci";

import { useRouter } from "next/navigation";
import { MotionDiv } from "../ui/MotionDiv";

export const ProgramCard = ({
  image,
  title,
  description,
  id,
}: TrailsPageProps) => {
  const router = useRouter();

  return (
    <MotionDiv
      className="w-full h-80 max-w-80"
      func={() => router.push(`/programPage/${id}`)}
    >
      <div className="card bg-cgray w-full h-full shadow-xl border-2 border-gray overflow-hidden text-left">
        <img
          src={image}
          className="min-h-[40%]"
          style={{ objectFit: "cover" }}
          alt=""
        />
        <div className="card-body p-4 min-h-[60%]">
          <div className="flex flex-row items-center justify-start relative gap-2 w-full">
            <h2 className="card-title text-dgray w-[90%]">{title}</h2>
          </div>
          <p className="text-justify text-sm text-dgray flex items-start">
            {description}
          </p>
        </div>
      </div>
    </MotionDiv>
  );
};
