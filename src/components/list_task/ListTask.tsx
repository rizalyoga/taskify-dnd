import React from "react";
import "./ListTask.scss";
import { Droppable } from "react-beautiful-dnd";

// Component
import Card from "../card/Card";

// Type | Interface
import { Tasks } from "../../types/taskType";

interface ListProps {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  completeTasks: Tasks[];
  setCompleteTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

const ListTask = ({
  tasks,
  setTasks,
  completeTasks,
  setCompleteTasks,
}: ListProps) => {
  return (
    <div className="list__container">
      <Droppable droppableId="uncomplete-tasks">
        {(provided) => (
          <div
            className="list__complete-task"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Uncomplete task</h2>
            {tasks?.map((task, idx) => (
              <Card
                key={task.id}
                setTasks={setTasks}
                index={idx}
                tasks={tasks}
                task={task}
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="complete-tasks">
        {(provided) => (
          <div
            className="list__uncomplete-task "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Complete task</h2>
            {completeTasks?.map((task, idx) => (
              <Card
                key={task.id}
                task={task}
                tasks={completeTasks}
                setTasks={setCompleteTasks}
                index={idx}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListTask;
