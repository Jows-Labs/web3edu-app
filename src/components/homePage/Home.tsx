import { div } from "framer-motion/client";
import UserCard from "./UserCard";
import { NftsCard } from "./NftsCard";

export const Home = () => {
  return (
    <div className="h-full w-full grid items-center sm:grid-cols-1 md:grid-cols-2 px-20 justify-items-center">
      <UserCard />
      <NftsCard />
    </div>
  );
};
