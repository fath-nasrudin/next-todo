'use client';
import { useLeftbarState } from './leftbar.context';
import { LeftbarPage } from './leftbar-page';

export const LeftbarPageDesktop = () => {
  const { desktopLeftbar } = useLeftbarState();
  return (
    <div className={`hidden ${desktopLeftbar && 'md:flex'} h-full`}>
      <LeftbarPage />
    </div>
  );
};
