'use client';

import { Task } from '@/types';
import React, { createContext, useContext, useReducer } from 'react';

const taskReducer = () => {};

const renderInitialTasks = () => [
  { id: 1, name: 'list item 1', isDone: false, projectId: 1 },
  { id: 2, name: 'list item 2', isDone: false, projectId: 1 },
  { id: 3, name: 'list item 3', isDone: false, projectId: 2 },
];

type ActionType = { type: string; payload?: any };

const TaskStateContext = createContext<Task[]>(renderInitialTasks());
const TaskDispatchContext = createContext<
  React.Dispatch<ActionType> | undefined
>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  // declare reducer
  const [tasks, dispatch] = useReducer(taskReducer, null, renderInitialTasks);

  return (
    <TaskStateContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
};

export const useTaskState = () => useContext(TaskStateContext);
export const useTaskDispatch = () => useContext(TaskDispatchContext);
