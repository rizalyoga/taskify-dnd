import React from "react";
import "../ListTask.scss";

// Components
import Card from "../../card/Card";

// Type || Interface
import { Tasks } from "../../../types/taskType";
import { Droppable } from "react-beautiful-dnd";

interface TasksProps {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const UncompleteTask = ({ tasks, setTasks }: TasksProps) => {
  if (!tasks.length) {
    return <p className="empty__task">You don't have a task</p>;
  }

  return (
    <Droppable droppableId="uncomplete-task">
      {(provided) => (
        <div
          className="list__item-container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks?.map((task, idx) => (
            <Card
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              index={idx}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default UncompleteTask;
