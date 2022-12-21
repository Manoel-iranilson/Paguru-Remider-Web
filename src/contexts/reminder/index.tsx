import React, { createContext, useContext, useState } from "react";
import { ITask, IReminderProvider, IReminderContext } from "./types";

const ReminderContext = createContext({} as IReminderContext);

function ReminderProvider({ children }: IReminderProvider) {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);
  const [tempTask, setTempTask] = useState<ITask[]>([] as ITask[]);
  const [control, setControl] = useState(true);

  return (
    <ReminderContext.Provider
      value={{ tasks, setTasks, tempTask, setTempTask, control, setControl }}
    >
      {children}
    </ReminderContext.Provider>
  );
}

export function useReminder() {
  const { tasks, setTasks, tempTask, setTempTask, control, setControl } =
    useContext(ReminderContext);

  return { tasks, setTasks, tempTask, setTempTask, control, setControl };
}

export default ReminderProvider;
