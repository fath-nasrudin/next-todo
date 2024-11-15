'use client';

import { cn } from '@/lib/utils';
import { Task } from '@/types';
import { useState } from 'react';
import { Icons } from './icons';
import { useTaskDispatch } from '@/app/(app)/task.context';
import { TaskAddForm } from './task-add-form';

interface TaskItemProps {
  item: Task;
}

export const TaskItem = ({ item }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const taskDispatch = useTaskDispatch();
  const closeForm = () => setIsEdit(false);

  return (
    <>
      {isEdit && <TaskAddForm data={item} closeForm={closeForm} />}
      {!isEdit && (
        <li
          key={item.id}
          className="py-2 border-b-[1px] border-foreground/10 flex items-start gap-2"
        >
          <input
            type="checkbox"
            className=""
            onChange={() => {
              taskDispatch({
                type: 'TASK/UPDATE',
                payload: { taskData: { id: item.id, isDone: !item.isDone } },
              });
            }}
            checked={item.isDone}
          />
          <div className="flex-1 flex">
            <div className={cn(isChecked && 'line-through', 'mr-auto')}>
              {item.name}
            </div>
            <div className="flex gap-2">
              <button
                className="hover:bg-foreground/10 p-0.5"
                onClick={() => {
                  taskDispatch({
                    type: 'TASK/DELETE',
                    payload: { taskData: { id: item.id } },
                  });
                }}
              >
                <Icons.trash
                  className="text-foreground/80"
                  strokeWidth={1}
                  size={20}
                />
              </button>
              <button
                className="hover:bg-foreground/10 p-0.5"
                onClick={() => setIsEdit(true)}
              >
                {' '}
                <Icons.edit
                  className="text-foreground/80"
                  strokeWidth={1}
                  size={20}
                />
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};
