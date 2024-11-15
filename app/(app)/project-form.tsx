'use client';

import React, { useState } from 'react';
import { useProjectDispatch, useProjectState } from './project.context';
import { ProjectInput } from '@/types';

type ProjectFormProps = {
  closeForm: () => void;
  projectId?: number;
};

export const ProjectForm = ({ closeForm, projectId }: ProjectFormProps) => {
  const dispatchProject = useProjectDispatch();
  const project = useProjectState().find((p) => p.id === projectId);

  let initialData;
  if (project) {
    initialData = project;
  } else {
    initialData = { name: '' };
  }

  const [projectData, setProjectData] = useState<ProjectInput>(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/10 flex justify-center items-start">
      <div className="min-w-96 mt-36 p-4 rounded-md bg-white">
        <form className="border-[1px] border-gray-400 rounded-md">
          <div className="p-4">
            <div>
              <label className="block invisible h-0 w-0" htmlFor="project-name">
                Name
              </label>
              <input
                className="w-full outline-none text-foreground"
                type="text"
                id="project-name"
                name="name"
                placeholder="Project name"
                value={projectData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="border-t-[1px] border-t-gray-500 p-4  text-foreground flex gap-2 text-sm justify-end">
            <button
              className="px-4 py-1 rounded-md bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                closeForm();
                setProjectData(initialData);
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-1 rounded-md bg-gray-600 text-white font-semibold disabled:cursor-not-allowed"
              disabled={!projectData.name}
              onClick={(e) => {
                e.preventDefault();

                // the project not null mean its an update
                if (project) {
                  dispatchProject({
                    type: 'PROJECT/UPDATE',
                    payload: { projectData, projectId: project.id },
                  });
                } else {
                  dispatchProject({
                    type: 'PROJECT/ADD',
                    payload: { projectData },
                  });
                }
                // reset form
                setProjectData(initialData);
                closeForm();
              }}
            >
              {project ? 'Save' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
