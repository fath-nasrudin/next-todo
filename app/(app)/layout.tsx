import React from 'react';
import { TaskProvider } from './task.context';
import { ProjectProvider } from './project.context';
import { LeftbarProvider } from './leftbar.context';
import { PageHeader } from './page-header';
import { LeftbarPageMobile } from './leftbar-page-mobile';
import { LeftbarPageDesktop } from './leftbar-page-desktop';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LeftbarProvider>
      <ProjectProvider>
        <TaskProvider>
          <div className="min-h-screen flex items-stretch">
            {/* Leftbar */}
            <LeftbarPageDesktop />
            <LeftbarPageMobile />
            {/* mainbar */}
            <div className="flex-1 flex flex-col">
              {/* header */}
              <PageHeader />

              {children}
            </div>
          </div>
        </TaskProvider>
      </ProjectProvider>
    </LeftbarProvider>
  );
};

export default MainLayout;
