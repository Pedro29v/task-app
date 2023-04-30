"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTask } from "../context/taskContext";

function Navbar() {
  const router = useRouter();
  const { tasks } = useTask();

  return (
    <header
      className="bg-lightBlue text-white 
    flex items-center justify-between p-4 mb-14 "
    >
      <div className="ml-[1rem] flex items-center">
        <Link href="/">
          <h1 className="text-[2em] font-bold ">Task App</h1>
        </Link>

        <p className="ml-4 mt-[1rem]">{tasks?.length} tasks</p>
      </div>

      <div className="mr-[1rem]">
        <button
          className="bg-aquaGreen p-2 w-[8rem] 
          rounded-sm font-bold
          hover:shadow-md
          hover:shadow-black
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={() => router.push("/new")}
        >
          Add Task
        </button>
      </div>
    </header>
  );
}

export default Navbar;
