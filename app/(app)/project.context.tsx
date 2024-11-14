'use client';

import { Project } from '@/types';
import React, { createContext, useContext, useReducer } from 'react';

const projectReducer = () => {};

const renderInitialProjects = () => [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Two words' },
  { id: 3, name: 'Three words' },
];

type ActionType = { type: string; payload?: any };

const ProjectStateContext = createContext<Project[]>(renderInitialProjects());
const ProjectDispatchContext = createContext<
  React.Dispatch<ActionType> | undefined
>(undefined);

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
