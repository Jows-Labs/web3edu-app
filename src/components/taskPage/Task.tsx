import { TaskList } from "../TrailPage/TaskList";
import { TaskCard } from "./TaskCard";

export const Task = () => {
  return (
    <div className="w-full h-full flex flex-col px-20 py-5 gap-3">
      <p className="text-blue font-extrabold text-3xl h-[6%]">
        Criando Carteira MetaMask
      </p>
      <div className="w-full h-[94%] flex gap-3">
        <TaskCard />
        <TaskList />
      </div>
    </div>
  );
};
