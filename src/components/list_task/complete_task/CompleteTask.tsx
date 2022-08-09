import React from "react";
import "../ListTask.scss";

// Components
import Card from "../../card/Card";

// Type || Interface
import { Tasks } from "../../../types/taskType";
import { Droppable } from "react-beautiful-dnd";

interface CompleteTasksProps {
  setCompleteTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  completeTasks: Tasks[];
}

const CompleteTask = ({
  completeTasks,
  setCompleteTasks,
}: CompleteTasksProps) => {
  if (!completeTasks.length) {
    return <p className="empty__task">You don't have a task</p>;
  }

  return (
    <Droppable droppableId="complete-task">
      {(provided) => (
        <div
          className="list__item-container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {completeTasks?.map((task, idx) => (
            <Card
              key={task.id}
              task={task}
              tasks={completeTasks}
              setTasks={setCompleteTasks}
              index={idx}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CompleteTask;
