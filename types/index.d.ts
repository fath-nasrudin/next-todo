import { PartiallyRequired } from '@/lib/type-utils';

export type Task = {
  id: number;
  name: string;
  isDone: boolean;
  projectId: number;
};

export type TaskInput = PartiallyRequired<Task, 'name' | 'projectId'>;

export type Project = {
  id: number;
  name: string;
  default?: boolean;
};

export type ProjectInput = PartiallyRequired<Project, 'name'>;

export type NavItem = {
  name: string;
  href: string;
  disabled?: boolean;
};

export type NavItemProject = NavItem & { id: number };

export type TablistItem = NavItemProject;
