"use client";
import { useState, useEffect } from "react";
import { useTask } from "../../context/taskContext";
import { useRouter } from "next/navigation";

function Page({ params }) {
  const [task, setTask] = useState({ title: "", description: "" });
  const { createTask, tasks, updateTask } = useTask();
  const router = useRouter();

  const handldeChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      updateTask(params.id, task);
    } else {
      createTask(task.title, task.description);
    }

    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((e) => e.id == params.id);

      if (taskFound)
        setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);

  return (
    <div>
      <form className="flex ">
        <label>Title</label>
        <input
          placeholder="Write a title"
          name="title"
          value={task?.title}
          onChange={handldeChange}
        />
        <label>Description</label>
        <textarea
          placeholder="Write a description"
          name="description"
          value={task?.description}
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
