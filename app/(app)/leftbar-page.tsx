'use client';

import { Icons } from '@/components/icons';
import { ProjectTablist } from './project-tablist';
import { useLeftbarDispatch } from './leftbar.context';
import { ProjectAdd } from './project-add';
import { DefaultTablist } from './default-tablist';

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
      <div>
        <DefaultTablist />
        <div className="mt-8">
          <div className="px-2 flex justify-between">
            <div className="  mx-2 font-semibold text-xl">Projects</div>
            <ProjectAdd />
          </div>
          <ProjectTablist />
        </div>
      </div>
    </div>
  );
};
