import React, { useState } from "react";
import "./App.scss";

// Components
import TaskInputfield from "./components/form_create_task/TaskInputfield";
import UncompleteTask from "./components/list_task/uncomplete_task/UncompleteTask";

// type | interface
import { Tasks } from "./types/taskType";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const createTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      const newTask: Tasks = {
        id: Date.now(),
        task: task,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  return (
    <div className="app-container">
      <div className="inner-wrapper">
        <div className="header">
          <h1>~Taskify~</h1>
        </div>
        <TaskInputfield task={task} setTask={setTask} createTask={createTask} />
        <div className="content-container">
          <div className="unComplete-task">
            <h2>Uncomplete Task</h2>
            <UncompleteTask tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="complete-task">
            <h2>Complete Task</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
