'use client';

import { Icons } from '@/components/icons';
import { ProjectTablist } from './project-tablist';
import { useLeftbarDispatch, useLeftbarState } from './leftbar.context';

export const LeftbarPage = () => {
  const { desktopLeftbar } = useLeftbarState();
  const leftbarDispatch = useLeftbarDispatch();
  return (
    <div
      className={`basis-[300px] hidden ${
        desktopLeftbar && 'md:block'
      } shadow-md bg-gray-100 dark:bg-transparent px-4 pt-2 pb-8`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold">User</div>

        <button
          onClick={() => leftbarDispatch({ type: 'LEFTBAR/DESKTOP_SWITCH' })}
        >
          <Icons.panelLeft className="text-foreground/60" />
        </button>
      </div>
      <ProjectTablist />
    </div>
  );
};
