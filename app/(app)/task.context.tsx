'use client';

import { Task, TaskInput } from '@/types';
import React, { createContext, useContext, useReducer } from 'react';

const initialTasks = [
  { id: 1, name: 'list item 1', isDone: false, projectId: 1 },
  { id: 2, name: 'list item 2', isDone: false, projectId: 1 },
  { id: 3, name: 'list item 3', isDone: false, projectId: 2 },
];

const renderInitialTasks = () => initialTasks;

type ActionType = { type: 'TASK/ADD'; payload: { taskData: TaskInput } };

const taskReducer = (state: Task[], action: ActionType) => {
  if ((action.type = 'TASK/ADD')) {
    const newTask = {
      id: Number(Date.now()),
      name: action.payload.taskData.name,
      projectId: Number(action.payload.taskData.projectId),
      isDOne: !!action.payload.taskData.isDone,
    };
    return [...state, newTask];
  }
  throw new Error('Wrong action type');
};

const TaskStateContext = createContext<Task[]>(renderInitialTasks());
const TaskDispatchContext = createContext<React.Dispatch<ActionType>>();

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
