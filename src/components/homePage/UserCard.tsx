import Image from "next/image";
import UserImage from "../../assets/images/UserImage.png";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { IconButton } from "../ui/IconButton";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";
import { MotionDiv } from "../ui/MotionDiv";

export default function UserCard() {
  const { googleUserInfo, userDbInfo } = useWeb3AuthContext();
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };
  return (
    <div className="bg-white w-full lg:h-full h-64 lg:row-span-2 flex flex-col rounded-box lg:col-span-2 border-[1.5px] border-gray relative">
      <div className="h-1/4 bg-ddblue rounded-t-box"></div>
      <div className="border border-gray rounded-full h-20 w-20 overflow-hidden absolute z-10 top-[12.5%] left-8 bg-white">
        {googleUserInfo !== null ? (
          <img
            src={googleUserInfo?.photoURL}
            alt=""
            className="w-full h-full"
          ></img>
        ) : (
          <div className="skeleton h-full w-full"></div>
        )}
      </div>
      <div className="text-neutral px-8 pt-16 pb-4 h-3/4 flex flex-col justify-between">
        <h2 className="font-bold text-xl">{userDbInfo?.displayName}</h2>
        <div className="w-full flex justify-between items-end">
          <p className="font-medium text-lg text-gray">São Paulo, Brasil</p>
          <div className="flex flex-col gap-3 md:flex-row items-start ">
            {userDbInfo?.socialMedia?.linkedin ? (
              <IconButton
                className="h-8 text-ddblue"
                Icon={FaLinkedin}
                func={() => openExternalLink(userDbInfo?.socialMedia?.linkedin)}
              />
            ) : (
              <></>
            )}
            {userDbInfo?.socialMedia?.discord ? (
              <MotionDiv className="flex items-center gap-2 cursor-pointer">
                <FaDiscord className="h-8 w-8 text-ddblue" />
                <p className="md:text-lg">{userDbInfo?.socialMedia?.discord}</p>
              </MotionDiv>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
