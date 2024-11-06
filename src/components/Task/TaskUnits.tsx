import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { MotionDiv } from "../ui/MotionDiv";
import { FaCircleCheck } from "react-icons/fa6";

export const TaskUnits = ({ text, id, trailId, done }: TaskUnitsProps) => {
  const router = useRouter();
  const { sectionId } = useParams();

  return (
    <MotionDiv
      className={`w-full min-h-20 h-20 rounded-lg flex items-center justify-between bg-ccgray rounded-box shadow-lg px-6 text-neutral font-bold cursor-pointer transition-[border] duration-1000  ${
        done === true
          ? "border-green border shadow-green"
          : sectionId === id
          ? "border-ddblue border-2"
          : ""
      } ${
        done === true && sectionId === id
          ? "border-green border-2 shadow-green"
          : ""
      }`}
      func={() => router.push(`/learn/${trailId}/${id}`)}
    >
      <p>{text}</p>
      {done === true && <FaCircleCheck className="h-6 w-auto text-green" />}
    </MotionDiv>
  );
};
