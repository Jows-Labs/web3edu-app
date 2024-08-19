import Image from "next/image";

function TrailCard({ trailName, image }: { trailName: any; image: any }) {
  return (
    <div className="bg-[#EEEEEE] text-black flex  w-1/4 h-1/3 rounded-3xl shadow-2xl ">
      <div className="flex flex-col justify-center items-start px-6 gap-4">
        <Image src={image} alt="" className="h-1/6 w-fit" />

        <p>{trailName}</p>
      </div>
    </div>
  );
}

export default TrailCard;
