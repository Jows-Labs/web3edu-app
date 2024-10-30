import { Container } from "./Container";
import { TaskList } from "./TaskList";

export const Trail = () => {
  return (
    <div className="md:h-full w-full justify-center items-center flex flex-col md:flex-row sm:p-10 md:gap-10 ">
      <Container />
      <TaskList />
    </div> 
  );
};
