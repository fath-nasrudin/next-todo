'use client';

import { Project, ProjectInput } from '@/types';
import React, { createContext, useContext, useReducer } from 'react';

const renderInitialProjects = (): Project[] => [
  { id: 1, name: 'Inbox', default: true },
  { id: 2, name: 'Home' },
  { id: 3, name: 'Work' },
];

type ActionType =
  | {
      type: 'PROJECT/ADD';
      payload: { projectData: ProjectInput };
    }
  | {
      type: 'PROJECT/UPDATE';
      payload: { projectData: ProjectInput; projectId: number };
    }
  | {
      type: 'PROJECT/DELETE';
      payload: { projectId: number };
    };

const projectReducer = (state: Project[], action: ActionType) => {
  if (action.type === 'PROJECT/ADD') {
    const newProject: Project = {
      id: Number(Date.now()),
      name: action.payload.projectData.name,
    };
    return [...state, newProject];
  }

  if (action.type === 'PROJECT/UPDATE') {
    return state.map((item) => {
      if (item.id === action.payload.projectId) {
        item = { ...item, ...action.payload.projectData };
      }
      return item;
    });
  }

  if (action.type === 'PROJECT/DELETE') {
    return state.filter((item) => item.id !== action.payload.projectId);
  }

  throw new Error('Action unknown');
};

const ProjectStateContext = createContext<Project[]>(renderInitialProjects());
const ProjectDispatchContext = createContext<React.Dispatch<ActionType>>();

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // declare reducer
  const [projects, dispatch] = useReducer(
    projectReducer,
    null,
    renderInitialProjects
  );

  return (
    <ProjectStateContext.Provider value={projects}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  );
};

export const useProjectState = () => useContext(ProjectStateContext);
export const useProjectDispatch = () => useContext(ProjectDispatchContext);
