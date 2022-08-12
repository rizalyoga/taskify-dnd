export interface Tasks {
  id: number;
  task: string;
  isDone: boolean;
}

export interface AllListTasksContext {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  completeTasks: Tasks[];
  setCompleteTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}
