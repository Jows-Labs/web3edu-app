import { TaskUnits } from "../taskPage/TaskUnits";
import { Container } from "./Container";

export const Trail = () => {
  return (
    <div className="h-full w-full justify-center items-center flex flex-col">
      <Container />
      <TaskUnits text="Módulo 1" />;
    </div>
  );
};
