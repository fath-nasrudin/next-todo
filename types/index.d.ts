export type Task = {
  id: number;
  name: string;
  isDone: boolean;
  projectId: number;
};

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
