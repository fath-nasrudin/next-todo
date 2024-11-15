import Link from 'next/link';
import React from 'react';
import { TaskProvider } from './task.context';
import { ProjectProvider } from './project.context';
import { ProjectTablist } from './project-tablist';
import { Icons } from '@/components/icons';
import { LeftbarProvider } from './leftbar.context';
import { PageHeader } from './page-header';
import { LeftbarPage } from './leftbar-page';
import { LeftbarPageMobile } from './leftbar-page-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <LeftbarProvider>
      <ProjectProvider>
        <TaskProvider>
          <div className="min-h-screen flex">
            {/* Leftbar */}
            <LeftbarPage />
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
