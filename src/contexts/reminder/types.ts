export interface IListTask {
  id: number;
  taskItem: string;
  isCompleted: boolean;
}

export interface ITask {
  date: string;
  task: IListTask[];
}

export interface IReminderProvider {
  children?: React.ReactNode;
}

export interface IReminderContext {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  tempTask: ITask[];
  setTempTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  control: boolean;
  setControl: React.Dispatch<React.SetStateAction<boolean>>;
}
