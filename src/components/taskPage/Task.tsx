import { TaskList } from "../learn/TaskList";
import { TaskCard } from "./TaskCard";

export const Task = () => {
  return (
    <div className="w-full h-full flex flex-col md:px-20 py-5 gap-3">
      <p className="text-blue font-extrabold md:text-3xl text-2xl md:text-start text-center h-[6%] px-2">
        Criando Carteira MetaMask
      </p>
      <div className="w-full md:h-[94%] bg-neutralbg flex md:gap-3 flex md:flex-row flex-col">
        <TaskCard />
        <TaskList />
      </div>
    </div>
  );
};
