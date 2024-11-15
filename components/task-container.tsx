import { Project, Task } from '@/types';
import { TaskItem } from './task-item';
import { TaskAdd } from './task-add';

interface TaskContainerProps {
  tasks: Task[];
  project?: Project | undefined | null;
  title?: string;
}

export const TaskContainer = ({
  tasks,
  project,
  title,
}: TaskContainerProps) => {
  const mainTitle = project?.name || title;
  return (
    <div className="mt-12">
      <div className=" py-4 px-8 md:px-14 pb-20">
        {mainTitle && (
          <div className=" max-w-screen-md mx-auto font-semibold text-3xl">
            {mainTitle}
          </div>
        )}

        <div className="max-w-screen-md mx-auto mt-8">
          <ul>
            {tasks.map((item) => (
              <TaskItem key={item.id} item={item} />
            ))}
          </ul>
          <TaskAdd />
        </div>
      </div>
    </div>
  );
};
