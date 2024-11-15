'use client';

import { useState } from 'react';
import { TaskAddForm } from './task-add-form';

export const TaskAdd = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="py-2">
      {!isOpen && (
        <button
          className="w-full border-[1px] border-red-500 rounded-md text-red-500"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add task
        </button>
      )}

      {isOpen && <TaskAddForm closeForm={closeForm} />}
    </div>
  );
};
