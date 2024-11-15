import { Project, Task } from '@/types';
import { TaskItem } from './task-item';
import { TaskAdd } from './task-add';

interface TaskContainerProps {
  tasks: Task[];
  project: Project | undefined | null;
}

export const TaskContainer = ({ tasks, project }: TaskContainerProps) => {
  return (
    <div className="mt-12">
      <div className=" py-4 px-8 md:px-14 pb-20">
        {project && (
          <div className=" max-w-screen-md mx-auto font-semibold text-3xl">
            {project.name}
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
