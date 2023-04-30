"use client";
import { useEffect } from "react";
import { useTask } from "../../context/taskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

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
      toast.success("Task created succesfully");
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
    <div className="bg-lightBlue w-[80%] md:w-[40%] m-auto p-10 text-white">
      <form>
        <div className="mb-4 text-center ">
          <p>
            <label className="font-bold">Title</label>
          </p>

          <input
            placeholder="Write a title"
            {...register("title", { required: true })}
            className="w-[12rem] p-2 text-black"
          />

          {errors.title && <span>This field is required</span>}
        </div>

        <div className="mb-6 text-center ">
          <p>
            <label className="font-bold">Description</label>
          </p>

          <textarea
            placeholder="Write a description"
            {...register("description", { required: true })}
            className="w-[12rem] p-2  text-black"
          />

          {errors.description && <span>This field is required</span>}
        </div>

        <div className=" text-center ">
          <button
            onClick={onSubmit}
            className="bg-red-500 p-2 w-[7rem] 
          rounded-sm font-bold
          hover:shadow-md
          hover:shadow-black
          transition ease-in-out delay-150 
          hover:-translate-y-1 
          hover:scale-110 duration-300 "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
