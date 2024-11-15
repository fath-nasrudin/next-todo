'use client';

import { TaskContainer } from '@/components/task-container';
import { useTaskState } from './task.context';

export default function Home() {
  const tasks = useTaskState();
  return <TaskContainer tasks={tasks} title="All Tasks" />;
}
