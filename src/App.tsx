import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.scss";

// Components
import TaskInputfield from "./components/form_create_task/TaskInputfield";
import UncompleteTask from "./components/list_task/uncomplete_task/UncompleteTask";
import CompleteTask from "./components/list_task/complete_task/CompleteTask";

// type | interface
import { Tasks } from "./types/taskType";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [completeTasks, setCompleteTasks] = useState<Tasks[]>([]);

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

  const onDragEnd = (result: DropResult) => {
    console.log(result);

    const { source, destination } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let uncomplete = tasks;
    let complete = completeTasks;

    if (source.droppableId === "uncomplete-task") {
      add = uncomplete[source.index];
      uncomplete.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "uncomplete-task") {
      uncomplete.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setTasks(uncomplete);
    setCompleteTasks(complete);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app-container">
        <div className="inner-wrapper">
          <div className="header">
            <h1>~Taskify~</h1>
          </div>
          <TaskInputfield
            task={task}
            setTask={setTask}
            createTask={createTask}
          />
          <div className="content-container">
            <div className="unComplete-task">
              <h2>Uncomplete Task</h2>
              <UncompleteTask tasks={tasks} setTasks={setTasks} />
            </div>
            <div className="complete-task">
              <h2>Complete Task</h2>
              <CompleteTask
                completeTasks={completeTasks}
                setCompleteTasks={setCompleteTasks}
              />
            </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
