import React, { useRef } from "react";
import "./TaskInputfield.scss";

interface PropsTask {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  createTask: (e: React.FormEvent) => void;
}

const TaskInputfield = ({ task, setTask, createTask }: PropsTask) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="form__container"
      onSubmit={(e) => {
        createTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your task !"
        className="form__input-task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="form__submit-task-btn">
        GO
      </button>
    </form>
  );
};

export default TaskInputfield;
