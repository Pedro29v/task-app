"use client";
import { useState } from "react";
import { useTask } from "../../context/taskContext";
import { useRouter } from "next/navigation";

function Page() {
  const [task, setTask] = useState();
  const { createTask } = useTask();
  const router = useRouter();

  const handldeChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push("/");
  };

  return (
    <div>
      <form className="flex ">
        <label>Title</label>
        <input
          placeholder="Write a title"
          name="title"
          onChange={handldeChange}
        />
        <label>Description</label>
        <textarea
          placeholder="Write a description"
          name="description"
          onChange={handldeChange}
        />

        <button onClick={handleSubmit} className="bg-red-500 p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default Page;
