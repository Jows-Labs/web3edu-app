import { div } from "framer-motion/client";
import UserCard from "./UserCard";
import { NftsCard } from "./NftsCard";
import { JourneysCard } from "./JourneysCard";
import { TrailsCardSection } from "./TrailsCardSection";

export const Home = () => {
  return (
    <div className="h-full w-full grid items-center grid-cols-1 grid-rows-5 pb-6 sm:grid-cols-5 sm:px-40 justify-center gap-10">
      <UserCard />
      <NftsCard />
      <JourneysCard />
      <TrailsCardSection />
    </div>
  );
};
