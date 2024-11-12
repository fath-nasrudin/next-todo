import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Leftbar */}
      <div className="basis-[300px] hidden md:block shadow-md bg-gray-100 dark:bg-transparent">
        Leftbar
      </div>
      {/* mainbar */}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
