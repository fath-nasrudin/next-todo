'use client';

import { Task, TaskInput } from '@/types';
import React, { createContext, useContext, useReducer } from 'react';

const initialTasks = [
  { id: 1, name: 'list item 1', isDone: false, projectId: 1 },
  { id: 2, name: 'list item 2', isDone: false, projectId: 1 },
  { id: 3, name: 'list item 3', isDone: false, projectId: 2 },
];

const renderInitialTasks = () => initialTasks;

type ActionType =
  | { type: 'TASK/ADD'; payload: { taskData: TaskInput } }
  | { type: 'TASK/DELETE'; payload: { taskData: { id: number } } }
  | { type: 'TASK/UPDATE'; payload: { taskData: TaskInput } }
  | { type: 'TASK/DELETE_BY_PROJECTID'; payload: { projectId: number } };

const taskReducer = (state: Task[], action: ActionType) => {
  if (action.type === 'TASK/ADD') {
    const newTask = {
      id: Number(Date.now()),
      name: action.payload.taskData.name,
      projectId: Number(action.payload.taskData.projectId),
      isDone: !!action.payload.taskData.isDone,
    };
    return [...state, newTask];
  }

  if (action.type === 'TASK/UPDATE') {
    const id = action.payload.taskData.id;
    return state.map((item) => {
      if (item.id === id) {
        item = { ...item, ...action.payload.taskData };
      }
      return item;
    });
  }

  if (action.type === 'TASK/DELETE') {
    const id = action.payload.taskData.id;
    return state.filter((item) => item.id !== id);
  }

  if (action.type === 'TASK/DELETE_BY_PROJECTID') {
    return state.filter((item) => item.projectId !== action.payload.projectId);
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
