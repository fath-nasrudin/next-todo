'use client';

import { Tablist } from '@/components/tablist';
import { useProjectState } from './project.context';
import { NavItemProject, Project } from '@/types';
import { Icons } from '@/components/icons';

export const DefaultTablist = () => {
  const projects: Project[] = useProjectState();

  const userProjects = projects.filter((p) => p.default);

  const navItems: NavItemProject[] = [
    {
      name: 'All',
      href: '/',
      id: -1,
      Icon: Icons.inbox,
    },
  ];

  const navItemProjects: NavItemProject[] = userProjects.map((item) => {
    const kebabName = item.name.trim().toLowerCase().split(' ').join('-');
    const url = `/project/${kebabName}-${item.id}`;

    return {
      name: item.name,
      href: url,
      id: item.id,
      withAction: false,
      Icon: Icons.inbox,
    };
  });
  navItems.push(...navItemProjects);

  return <Tablist items={navItems} />;
};
