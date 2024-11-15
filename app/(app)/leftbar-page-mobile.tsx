'use client';

import { useLeftbarState } from './leftbar.context';
import { LeftbarPage } from './leftbar-page';

export const LeftbarPageMobile = () => {
  const { mobileLeftbar } = useLeftbarState();
  return (
    <div
      className={`${
        mobileLeftbar ? 'flex' : 'hidden'
      } md:hidden fixed left-0 top-0 w-full h-full bg-foreground/10`}
    >
      <LeftbarPage />
    </div>
  );
};
