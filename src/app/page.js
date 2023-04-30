"use client";
import { useTask } from "../context/taskContext.jsx";
import TaskCard from "@/components/TaskCard.jsx";

function Page() {
  const { tasks } = useTask();

  return (
    <div className="m-auto w-[80%]  ">
      {tasks.map((e) => (
        <TaskCard
          key={e.id}
          id={e.id}
          title={e.title}
          description={e.description}
        />
      ))}
    </div>
  );
}

export default Page;
