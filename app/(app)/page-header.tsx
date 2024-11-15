'use client';

import { Icons } from '@/components/icons';
import Link from 'next/link';
import { useLeftbarDispatch, useLeftbarState } from './leftbar.context';

export const PageHeader = () => {
  const leftbarDispatch = useLeftbarDispatch();
  const { desktopLeftbar } = useLeftbarState();
  return (
    <div className="border-b-[1px] border-b-foreground/10 flex items-center">
      <div className="py-2 px-4 flex items-center gap-2">
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

        <Link href={'/'} className="font-bold text-xl text-red-500">
          NextTodo
        </Link>
      </div>
    </div>
  );
};
