import { Container } from "./Container";
import { TaskList } from "./TaskList";

export const Trail = () => {
  return (
    <div className="h-full w-full justify-center items-center flex flex-col md:flex-row p-10 gap-10">
      <Container />
      <TaskList />
    </div>
  );
};
