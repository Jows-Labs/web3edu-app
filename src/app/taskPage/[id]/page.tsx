"use client";

import { Task } from "@/components/Task/Task";
import { useParams } from "next/navigation";

export default function taskPage() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <Task />
    </div>
  );
}
