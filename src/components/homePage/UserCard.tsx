import Image from "next/image";
import UserImage from "../../assets/images/UserImage.png";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

export default function UserCard() {
  const { userInfo, googleUserInfo } = useWeb3AuthContext();
  return (
    <div className="bg-white w-full lg:h-full h-64 lg:row-span-2 flex flex-col rounded-box lg:col-span-2 border-[1.5px] border-gray relative">
      <div className="h-1/4 bg-ddblue rounded-t-box"></div>
      <div className="border border-gray rounded-full h-16 w-16 overflow-hidden absolute z-10 top-[12.5%] left-8 bg-white">
        <img src={googleUserInfo?.photoURL} alt="" className="w-full h-full" />
      </div>
      <div className="text-neutral px-4 pt-10 pb-4 h-3/4 flex flex-col justify-between">
        <h2 className="font-bold text-xl">{googleUserInfo?.displayName}</h2>
        <p className="font-medium text-lg text-gray">São Paulo, Brasil</p>
      </div>
    </div>
  );
}
