"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-hot-toast";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTask must used within a provider");

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("tasks");
    const tasks = JSON.parse(item);

    if (tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

    if (confirm) {
      setTasks([...tasks.filter((e) => e.id !== id)]);
      toast.success("Task deleted succesfully");
    }
  };

  const updateTask = (id, newData) => {
    setTasks([
      ...tasks.map((task) => (task.id == id ? { ...task, ...newData } : task)),
    ]);
    toast.success("Task updated succesfully");
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}
