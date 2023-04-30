import { useRouter } from "next/navigation";
import { useTask } from "../context/taskContext";

function TaskCard({ id, title, description }) {
  const router = useRouter();
  const { deleteTask } = useTask();

  return (
    <>
      <div
        className="bg-lightBlue w-[80%]  mb-4 p-2 
       m-auto text-white rounded-sm 
       md:flex md:justify-between md:items-center
       "
      >
        <div className="w-[80%]">
          <p
            onClick={() => router.push(`/edit/${id}`)}
            className="text-[1.3rem] font-bold mb-2 hover:cursor-pointer "
          >
            {title}
          </p>
          <p className="mb-6">{description}</p>
        </div>

        <div className="w-[100%] flex justify-center  md:w-[10%] md:h-[2.5rem] ">
          <button
            onClick={() => deleteTask(id)}
            className="bg-red-500 hover:bg-mintGreen
             p-[0.2rem] text-center w-[35%] rounded-sm 
             hover:text-black md:w-[100%]
           
             "
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
