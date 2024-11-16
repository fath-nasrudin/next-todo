'use client';

import { Icons } from '@/components/icons';
import Link from 'next/link';
import { useLeftbarDispatch, useLeftbarState } from './leftbar.context';

export const PageHeader = () => {
  const leftbarDispatch = useLeftbarDispatch();
  const { desktopLeftbar } = useLeftbarState();
  return (
    <div className="border-b-[1px] border-b-foreground/10 flex items-center">
      <div className="w-full py-2 px-4 flex items-center gap-2">
        {/* Desktop Leftbar toggle button */}
        <button
          className={`hidden ${!desktopLeftbar && 'md:block'}`}
          onClick={() => leftbarDispatch({ type: 'LEFTBAR/DESKTOP_SWITCH' })}
        >
          <Icons.panelLeft className=" text-foreground/60" />
        </button>

        {/* Mobile Leftbar toggle button */}
        <button
          onClick={() => leftbarDispatch({ type: 'LEFTBAR/MOBILE_SHOW' })}
          className="md:hidden"
        >
          <Icons.panelLeft className={` $text-foreground/60`} />
        </button>

        <Link href={'/'} className="font-bold text-xl text-red-500 mr-auto">
          NextTodo
        </Link>
        <Link
          href="https://github.com/fath-nasrudin/next-todo"
          target="_blank"
          className="text-red-500 text-sm"
        >
          Source Code
        </Link>
      </div>
    </div>
  );
};
