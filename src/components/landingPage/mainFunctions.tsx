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
    <div className="bg-[#F3F3F3] text-black flex min-w-64 h-36 rounded-3xl flex shadow-xl">
      <div className="w-2/5 h-full rounded-l-3xl flex justify-center">
        <Image src={image} alt="" className="w-4/6" />
      </div>
      <div className="w-3/5 h-full bg-[#001D3D] rounded-r-3xl flex justify-center items-center text-center px-4">
        <p className="text-white">{functionName}</p>
      </div>
    </div>
  );
}

export default MainFunctions;
