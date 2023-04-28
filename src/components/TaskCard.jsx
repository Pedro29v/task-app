import React from "react";

function TaskCard({ id, title, description }) {
  return (
    <div>
      <h2 className="text-[2rem]">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
