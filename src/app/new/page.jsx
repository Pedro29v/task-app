"use client";
import { useState, useEffect } from "react";
import { useTask } from "../../context/taskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Page({ params }) {
  const { createTask, tasks, updateTask } = useTask();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data.title, data.description);
    }

    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((e) => e.id == params.id);

      if (taskFound) setValue("title", taskFound.title);
      setValue("description", taskFound.description);
    }
  }, []);

  return (
    <div>
      <form className="flex ">
        <label>Title</label>
        <input
          placeholder="Write a title"
          {...register("title", { required: true })}
        />

        {errors.title && <span>This field is required</span>}

        <label>Description</label>
        <textarea
          placeholder="Write a description"
          {...register("description", { required: true })}
        />

        {errors.description && <span>This field is required</span>}

        <button onClick={onSubmit} className="bg-red-500 p-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default Page;
