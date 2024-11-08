import Image from "next/image";
import { MotionDiv } from "../ui/MotionDiv";

function MainFunctions({
  functionName,
  content,
  image,
}: {
  functionName: any;
  content: any;
  image: any;
}) {
  return (
    <MotionDiv className="bg-[#F3F3F3] text-black flex w-80 h-40 rounded-3xl flex shadow-xl">
      <div className="w-2/5 h-full rounded-l-3xl flex justify-center">
        <Image src={image} alt="" className="w-24 h-auto" />
      </div>
      <div className="w-3/5 h-full bg-[#001D3D] rounded-r-3xl flex justify-center items-center text-center">
        <p className="text-white text-2xl">{functionName}</p>
      </div>
    </MotionDiv>
  );
}

export default MainFunctions;
