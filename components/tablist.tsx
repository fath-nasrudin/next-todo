'use client';

import { cn } from '@/lib/utils';
import { TablistItem } from '@/types';
import Link from 'next/link';
import { redirect, useSelectedLayoutSegments } from 'next/navigation';
import { Icons } from './icons';
import { useProjectDispatch } from '@/app/(app)/project.context';
import { useTaskDispatch } from '@/app/(app)/task.context';

interface TablistProps {
  items: TablistItem[];
}

export const Tablist = ({ items }: TablistProps) => {
  const segment = useSelectedLayoutSegments();
  const projectDispatch = useProjectDispatch();
  const taskDispatch = useTaskDispatch();

  return (
    <ul className="flex flex-col">
      {items.map((item, index: number, arr) => (
        <Link
          key={item.href}
          className={cn(
            'py-2 px-4 rounded-md ',
            item.href.startsWith(`/${segment.join('/')}`)
              ? 'bg-red-100 text-red-600'
              : 'hover:bg-foreground/5'
          )}
          href={item.href}
        >
          <div className="flex">
            <div className="mr-auto">{item.name}</div>
            <div className="flex gap-2">
              <button
                className="hover:bg-foreground/10 p-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  // delete project
                  projectDispatch({
                    type: 'PROJECT/DELETE',
                    payload: { projectId: item.id },
                  });

                  // delete tasks
                  taskDispatch({
                    type: 'TASK/DELETE_BY_PROJECTID',
                    payload: { projectId: item.id },
                  });

                  // redirect to inbox or default tab
                  let urlToRedirect;
                  if (index - 1 < 0) {
                    urlToRedirect = arr[1]?.href;
                  } else {
                    urlToRedirect = arr[index - 1]?.href;
                  }
                  if (arr.length === 0) urlToRedirect = '/project';
                  redirect(urlToRedirect);
                }}
              >
                <Icons.trash
                  className="text-foreground/80"
                  strokeWidth={1}
                  size={20}
                />
              </button>

              {/* edit button */}
              <button
                className="hover:bg-foreground/10 p-0.5"
                onClick={(e) => {
                  e.preventDefault();
                  //  setIsEdit(true);
                }}
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
        </Link>
      ))}
    </ul>
  );
};
