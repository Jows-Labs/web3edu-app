import { Ob2LContainer } from "./Ob2LContainer";
import { Ob2RContainer } from "./Ob2RContainer";

export const Obcommu = () => {
  return (
    <div className="w-full h-full flex gap-5">
        <Ob2LContainer />  
        <Ob2RContainer />    
    </div>
  );
};
