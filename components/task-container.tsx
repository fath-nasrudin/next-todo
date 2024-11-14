import { Project, Task } from '@/types';
import { TaskItem } from './task-item';

interface TaskContainerProps {
  tasks: Task[];
  project: Project | undefined | null;
}

export const TaskContainer = ({ tasks, project }: TaskContainerProps) => {
  return (
    <div className="mt-12">
      {project && (
        <div className="max-w-screen-md px-8 md:px-14 font-semibold text-3xl">
          {project.name}
        </div>
      )}
      <div className=" py-4 px-8 md:px-14 pb-20">
        <div className="max-w-screen-md mx-auto">
          <ul>
            {tasks.map((item) => (
              <TaskItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
