import { Task } from "@/components/taskPage/Task";

export default function taskPage() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <Task />
    </div>
  );
}
