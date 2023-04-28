"use client";
import { useTask } from "../context/taskContext.jsx";
import TaskCard from "@/components/TaskCard.jsx";

function Page() {
  const { tasks } = useTask();

  return (
    <div>
      <h1 className="mb-10 text-[5rem]">Home Page</h1>
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
