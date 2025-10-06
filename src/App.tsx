import { useState } from "react";
import { container, kanbanContainer, kanbanLane } from "./App.css.ts";
import { TasksProvider, useTasks } from "./Context.tsx";

export type Status = "Backlog" | "To Do" | "In Progress" | "Done";
export const StatusArr: Status[] = ["Backlog", "To Do", "In Progress", "Done"];

const Lane = ({ status }: { status: Status }) => {
  const [allTasks, updateTasks] = useTasks();
  const tasks = allTasks.filter((task) => task.status === status);
  tasks.sort(
    (a, b) =>
      a.operations[a.operations.length - 1].ts.getTime() -
      b.operations[b.operations.length - 1].ts.getTime()
  );
  const idx = StatusArr.indexOf(status);
  return (
    <div className={kanbanLane}>
      <h2>{status}</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ marginBottom: "1rem" }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div>
            <button
              disabled={idx === 0}
              onClick={() => {
                task.status = idx > 0 ? StatusArr[idx - 1] : task.status;
                task.operations.push({ ts: new Date() });
                updateTasks();
              }}
            >
              &lt;
            </button>
            <button
              disabled={idx === StatusArr.length - 1}
              onClick={() => {
                task.status =
                  idx < StatusArr.length - 1 ? StatusArr[idx + 1] : task.status;
                task.operations.push({ ts: new Date() });
                updateTasks();
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <TasksProvider>
      <div className={container}>
        <h1>Kanban Challenge</h1>
        <div className={kanbanContainer}>
          <Lane status="Backlog" />
          <Lane status="To Do" />
          <Lane status="In Progress" />
          <Lane status="Done" />
        </div>
      </div>
    </TasksProvider>
  );
}

export default App;
