import React from "react";
import "../ListTask.scss";

// Components
import Card from "../../card/Card";

// Type || Interface
import { Tasks } from "../../../types/taskType";

interface TasksProps {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const UncompleteTask = ({ tasks, setTasks }: TasksProps) => {
  return (
    <>
      {tasks?.map((task) => (
        <Card key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </>
  );
};

export default UncompleteTask;
