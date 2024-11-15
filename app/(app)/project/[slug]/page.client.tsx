'use client';

import { TaskContainer } from '@/components/task-container';
import { useTaskState } from '../../task.context';
import { useProjectState } from '../../project.context';
import { notFound } from 'next/navigation';

interface ProjectTasklistProps {
  projectId: number;
}

export default function ProjectTasklist_({ projectId }: ProjectTasklistProps) {
  const tasklist = useTaskState();
  const projects = useProjectState();

  const tasks = tasklist.filter((task) => task.projectId === projectId);
  const currentProject = projects.find((p) => p.id === projectId);

  if (!currentProject) return notFound();

  return <TaskContainer tasks={tasks} project={currentProject} />;
}
