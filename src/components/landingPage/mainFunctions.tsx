import Image from "next/image";

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
    <div className="bg-[#F3F3F3] text-black flex justify-between items-center w-72 h-32 rounded-3xl h-full flex drop-shadow-2xl">
      <div className="w-2/5 h-full rounded-l-3xl flex justify-center py-10">
        <Image src={image} alt="" className="w-4/6" />
      </div>
      <div className="w-3/5 h-full bg-[#001D3D] rounded-r-3xl flex justify-center items-center text-center py-10">
        <p className="text-white">{functionName}</p>
      </div>
    </div>
  );
}

export default MainFunctions;
