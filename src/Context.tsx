import { createContext, useContext, useState } from "react";
import type { Task } from "./Task";

export const Tasks = createContext<[Task[], () => void]>([[], () => {}]);

import type { ReactNode } from "react";

const startingTasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    status: "To Do",
    operations: [{ ts: new Date() }],
  },
  {
    id: "2",
    title: "Task 2",
    status: "In Progress",
    operations: [{ ts: new Date() }],
  },
  {
    id: "3",
    title: "Task 3",
    status: "Done",
    operations: [{ ts: new Date() }],
  },
  {
    id: "4",
    title: "Task 4",
    status: "To Do",
    operations: [{ ts: new Date() }],
  },
  {
    id: "5",
    title: "Task 5",
    status: "In Progress",
    operations: [{ ts: new Date() }],
  },
  {
    id: "6",
    title: "Task 6",
    status: "Done",
    operations: [{ ts: new Date() }],
  },
  {
    id: "7",
    title: "Task 7",
    status: "To Do",
    operations: [{ ts: new Date() }],
  },
  {
    id: "8",
    title: "Task 8",
    status: "In Progress",
    operations: [{ ts: new Date() }],
  },
  {
    id: "9",
    title: "Task 9",
    status: "Done",
    operations: [{ ts: new Date() }],
  },
  {
    id: "10",
    title: "Task 10",
    status: "To Do",
    operations: [{ ts: new Date() }],
  },
];

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(startingTasks);
  const updateTasks = () => setTasks([...tasks]); // Force re-render
  return (
    <Tasks.Provider value={[tasks, updateTasks]}>{children}</Tasks.Provider>
  );
};

export const useTasks = () => useContext(Tasks);
