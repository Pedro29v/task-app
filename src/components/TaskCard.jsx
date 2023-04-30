import { useRouter } from "next/navigation";
import { useTask } from "../context/taskContext";
import { toast } from "react-hot-toast";

function TaskCard({ id, title, description }) {
  const router = useRouter();
  const { deleteTask } = useTask();

  return (
    <>
      <div className="bg-slate-500 mb-4 p-2 w-[40rem] m-auto ">
        <h2 onClick={() => router.push(`/edit/${id}`)} className="text-[2rem]">
          {title}
        </h2>
        <p>{description}</p>
        <div>
          <button
            onClick={() => deleteTask(id)}
            className="bg-red-500 p-2 text-center "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
