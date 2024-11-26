import { div } from "framer-motion/client";
import UserCard from "./UserCard";
import { NftsCard } from "./NftsCard";
import { JourneysCard } from "./JourneysCard";
import { TrailsCardSection } from "./TrailsCardSection";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();
  const { userDbInfo } = useWeb3AuthContext();

  useEffect(() => {
    if (userDbInfo) {
      if (userDbInfo.tutorialDone === false) {
        router.push(`/onboarding`);
      }
    }
  }, [userDbInfo]);
  return (
    <div className="h-full w-full grid items-center grid-cols-1 lg:grid-rows-5 pb-6 lg:grid-cols-5 lg:px-40 px-10 justify-center gap-10">
      <UserCard />
      <NftsCard />
      <JourneysCard />
      <TrailsCardSection />
    </div>
  );
};
