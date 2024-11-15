'use client';

import { Icons } from '@/components/icons';
import { ProjectTablist } from './project-tablist';
import { useLeftbarDispatch } from './leftbar.context';

export const LeftbarPage = () => {
  const leftbarDispatch = useLeftbarDispatch();
  return (
    <div
      className={`min-w-[300px] shadow-md bg-gray-100 dark:bg-transparent px-4 pt-2 pb-8 min-h-screen`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold">User</div>

        {/* desktop button */}
        <button
          className="hidden md:block"
          onClick={() => leftbarDispatch({ type: 'LEFTBAR/DESKTOP_SWITCH' })}
        >
          <Icons.panelLeft className="text-foreground/60" />
        </button>

        <button
          className="block md:hidden"
          onClick={() => leftbarDispatch({ type: 'LEFTBAR/MOBILE_SWITCH' })}
        >
          <Icons.panelLeft className="text-foreground/60" />
        </button>

        {/* mobile button */}
      </div>
      <ProjectTablist />
    </div>
  );
};
