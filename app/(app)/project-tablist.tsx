'use client';

import { Tablist } from '@/components/tablist';
import { useProjectState } from './project.context';
import { NavItemProject, Project } from '@/types';

export const ProjectTablist = () => {
  const projects: Project[] = useProjectState();

  const userProjects = projects.filter((p) => !p.default);

  const navItemProjects: NavItemProject[] = userProjects.map((item) => {
    const kebabName = item.name.trim().toLowerCase().split(' ').join('-');
    const url = `/project/${kebabName}-${item.id}`;

    return { name: item.name, href: url, id: item.id };
  });

  return <Tablist items={navItemProjects} />;
};
