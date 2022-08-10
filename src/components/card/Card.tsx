import React, { useState, useRef, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Card.scss";

// Icon
import { FcFullTrash, FcEditImage, FcApproval } from "react-icons/fc";

// Type | Interface
import { Tasks } from "../../types/taskType";

type SingleTaskProps = {
  task: Tasks;
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  index: number;
};

const Card = ({ task, tasks, setTasks, index }: SingleTaskProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>(task.task);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);

  // Function for approve done task
  const approveTaskHandler = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Function for Delete Task
  const deleteTaskHandler = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Function for Edit Task
  const editTaskHandler = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTasks(
      tasks.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, task: newTask } : prevTask
      )
    );
    setEdit((prevValue) => !prevValue);
  };

  return (
    <>
      <Draggable draggableId={task.id.toString()} index={index}>
        {(provided) => (
          <form
            className="card__container"
            onSubmit={(e) => editTaskHandler(e, task.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit && !task.isDone ? (
              <input
                className="card__edit-input"
                type="text"
                required
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                ref={inputRef}
              />
            ) : (
              <span
                className="card__task-desc"
                style={task.isDone ? { color: "red" } : { color: "white" }}
              >
                {task.task}
              </span>
            )}
            <div className="card__actions">
              <span className="card__action-icon">
                <FcEditImage
                  onClick={() => setEdit((prevValue) => !prevValue)}
                />
              </span>
              <span className="card__action-icon">
                <FcFullTrash onClick={() => deleteTaskHandler(task.id)} />
              </span>
              <span className="card__action-icon">
                <FcApproval onClick={() => approveTaskHandler(task.id)} />
              </span>
            </div>
          </form>
        )}
      </Draggable>
    </>
  );
};

export default Card;
