'use client';
import { useProjectState } from '@/app/(app)/project.context';
import { useTaskDispatch } from '@/app/(app)/task.context';
import { PartiallyRequired } from '@/lib/type-utils';
import { Task } from '@/types';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { useState } from 'react';

type TaskAddFormProps = {
  data?: PartiallyRequired<Task, 'name' | 'projectId'> | undefined;
  closeForm: () => void;
};

// if the data not undefined, it is mean an edit
export const TaskAddForm = ({ data, closeForm }: TaskAddFormProps) => {
  // assume that there are always project id in the end of pathname
  const pathname = usePathname();
  const splittedPathname = pathname.split('/');
  const lastPathnameSplitted =
    splittedPathname[splittedPathname.length - 1].split('-');
  const projectId = lastPathnameSplitted[lastPathnameSplitted.length - 1];

  const projects = useProjectState();
  let defaultData;
  if (!data) {
    defaultData = { name: '', projectId: projectId };
  } else {
    defaultData = data;
  }

  const [taskData, setTaskData] = useState(defaultData);
  const taskDispatch = useTaskDispatch();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <form className="border-[1px] border-gray-400 rounded-md">
      <div className="p-4">
        <div>
          <label className="block invisible h-0 w-0" htmlFor="task-name">
            Name
          </label>
          <input
            className="w-full outline-none"
            type="text"
            id="task-name"
            name="name"
            placeholder="Task name"
            value={taskData.name}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="border-t-[1px] border-t-gray-500 p-4 flex gap-2 text-sm">
        {/* project options */}
        <select
          name="projectId"
          className="mr-auto"
          onChange={handleInputChange}
          value={taskData.projectId}
        >
          {projects.map((p) => {
            return (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            );
          })}
        </select>

        <button
          className="px-4 py-1 rounded-md bg-gray-100"
          onClick={(e) => {
            e.preventDefault();
            setTaskData(defaultData);
            closeForm();
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-1 rounded-md bg-red-400 text-white font-semibold"
          onClick={(e) => {
            e.preventDefault();
            //
            if (!data) {
              taskDispatch({
                type: 'TASK/ADD',
                payload: {
                  taskData: {
                    ...taskData,
                    projectId: taskData.projectId
                      ? taskData.projectId
                      : projects[0].id,
                  },
                },
              });
            } else {
              taskDispatch({ type: 'TASK/UPDATE', payload: { taskData } });
            }
            // reset form
            setTaskData(defaultData);

            if (data) closeForm();
          }}
        >
          {data ? 'Save' : 'Add Task'}
        </button>
      </div>
    </form>
  );
};
