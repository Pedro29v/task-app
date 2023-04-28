import React from "react";
import { useRouter } from "next/navigation";

function TaskCard({ id, title, description }) {
  const router = useRouter();

  return (
    <>
      <div
        className="bg-slate-500 mb-4 p-2 w-[40rem] m-auto "
        onClick={() => router.push(`/edit/${id}`)}
      >
        <h2 className="text-[2rem]">{title}</h2>
        <p>{description}</p>
        <div>
          <button className="bg-red-500 p-2 text-center ">Delete</button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
