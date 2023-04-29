"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTask must used within a provider");

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "my first task",
      description: "some task",
    },
    {
      id: 2,
      title: "my second task",
      description: "some second task",
    },
  ]);

  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title,
        description,
      },
    ]);
  };

  const deleteTask = (id) => {
    const confirm = window.confirm("Are you sure");

    if (confirm) setTasks([...tasks.filter((e) => e.id !== id)]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
