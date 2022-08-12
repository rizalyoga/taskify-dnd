import React, { useContext } from "react";
import "./ListTask.scss";
import { Droppable } from "react-beautiful-dnd";

// Component
import Card from "../card/Card";

// Type | Interface
import { AllTasks } from "../../App";

const ListTask = () => {
  const context = useContext(AllTasks);

  return (
    <div className="list__container">
      <Droppable droppableId="uncomplete-tasks">
        {(provided) => (
          <div
            className="list__uncomplete-task"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Uncomplete task</h2>
            {context?.tasks?.map((task, idx) => (
              <Card key={task.id} index={idx} task={task} />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="complete-tasks">
        {(provided) => (
          <div
            className="list__complete-task "
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2>Complete task</h2>
            {context?.completeTasks.map((task, idx) => (
              <Card key={task.id} task={task} index={idx} />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ListTask;
