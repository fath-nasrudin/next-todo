'use client';

import { cn } from '@/lib/utils';
import { Task } from '@/types';
import { useState } from 'react';

interface TaskItemProps {
  item: Task;
}

export const TaskItem = ({ item }: TaskItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <li
      key={item.id}
      className="py-2 border-b-[1px] border-foreground/10 flex items-start gap-2"
    >
      <input
        type="checkbox"
        className=""
        onChange={() => setIsChecked((c) => !c)}
        checked={isChecked}
      />
      <div>
        <div className={cn(isChecked && 'line-through')}>{item.name}</div>
      </div>
    </li>
  );
};
