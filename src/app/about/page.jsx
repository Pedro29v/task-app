"use client";

import { useTask } from "../../context/taskContext";

function Page() {
  const values = useTask();

  console.log(values);

  return <div>About Page</div>;
}

export default Page;
