import { TaskUnits } from "../taskPage/TaskUnits";

export const TaskList = () => {
  const Tasks = [
    {
      description: "Módulo 1",
    },
    {
      description: "Módulo 2",
    },
    {
      description: "Módulo 3",
    },
    {
      description: "Módulo 5",
    },
    {
      description: "Módulo 6",
    },
    {
      description: "Módulo 7",
    },
    {
      description: "Módulo 8",
    },
    {
      description: "Módulo 9",
    },
    {
      description: "Módulo 10",
    },
    {
      description: "Módulo 11",
    },
    {
      description: "Módulo 12",
    },
    {
      description: "Módulo 13",
    },
  ];
  return (
    <div className="md:w-2/5 w-full h-full bg-cgray rounded-box p-8 overflow-y-auto gap-2 flex flex-col justify-start items-start">
      <>
        {Tasks.map((e) => {
          return <TaskUnits text={e.description} key="" />;
        })}
      </>
    </div>
  );
};
