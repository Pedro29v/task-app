"use client";
import { useTask } from "../context/taskContext.jsx";

function Page() {
  const { tasks } = useTask();

  return (
    <div>
      <h1>Home Page</h1>
      {tasks.map((e) => (
        <div key={e.id}>
          <p>{e.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
