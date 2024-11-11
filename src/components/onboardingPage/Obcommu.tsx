import { Ob2LContainer } from "./components/Ob2LContainer";
import { Ob2RContainer } from "./components/Ob2RContainer";

export const ObCommu = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col md:gap-5">
      <Ob2LContainer />
      <Ob2RContainer />
    </div>
  );
};
