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
};

export type NavItem = {
  name: string;
  href: string;
  disabled?: boolean;
};

export type TablistItem = NavItem;
