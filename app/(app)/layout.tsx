import { Tablist } from '@/components/tablist';
import Link from 'next/link';
import React from 'react';
import { TaskProvider } from './task.context';
import { ProjectProvider } from './project.context';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { name: 'Home', href: '/project/home-1' },
  { name: 'Two Words', href: '/project/two-words-2' },
  { name: 'Home', href: '/project/three-words-3' },
];

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <ProjectProvider>
      <TaskProvider>
        <div className="min-h-screen flex">
          {/* Leftbar */}
          <div className="basis-[300px] hidden md:block shadow-md bg-gray-100 dark:bg-transparent px-4 py-8">
            <Tablist items={navItems} />
          </div>
          {/* mainbar */}
          <div className="flex-1 flex flex-col">
            <div className="border-b-[1px] border-b-foreground/10">
              <div className="py-2 px-4">
                <Link href={'/'} className="font-bold text-xl text-red-500">
                  NextTodo
                </Link>
              </div>
            </div>
            {children}
          </div>
        </div>
      </TaskProvider>
    </ProjectProvider>
  );
};

export default MainLayout;
