import Image from "next/image";
import UserImage from "../../assets/images/UserImage.png";

export default function UserCard() {
  return (
    <div className="bg-white w-full h-full row-span-2 flex flex-col rounded-box col-span-2 border-[1.5px] border-gray relative">
      <div className="h-1/4 bg-ddblue rounded-t-box"></div>
      <div className="border border-gray rounded-full h-16 w-16 overflow-hidden absolute z-10 top-[12.5%] left-8 bg-white">
        <Image src={UserImage} alt="" className="w-full h-full" />
      </div>
      <div className="text-neutral px-4 pt-8 pb-4 h-3/4 flex flex-col justify-between">
        <h2 className="font-bold text-xl">Martin Burger King</h2>
        <p className="font-medium text-lg text-gray">São Paulo, Brasil</p>
      </div>
    </div>
  );
}
