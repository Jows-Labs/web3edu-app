import { div } from "framer-motion/client";
import UserCard from "./UserCard";
import { NftsCard } from "./NftsCard";
import { JourneysCard } from "./JourneysCard";

export const Home = () => {
  return (
    <div className="h-full w-full grid items-center grid-rows-5 grid-cols-1 pb-6 md:grid-cols-5 sm:px-10 justify-items-center gap-10">
      <UserCard />
      <NftsCard />
      <JourneysCard />
    </div>
  );
};
