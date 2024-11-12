import { TaskItem } from '@/components/task-item';

const tasklist = [
  { id: 1, name: 'list item 1', isDone: false, projectId: 1 },
  { id: 2, name: 'list item 2', isDone: false, projectId: 1 },
];

export default function Home() {
  return (
    <div className=" p-8 md:px-14 pb-20">
      <div className="max-w-screen-md mx-auto">
        <ul>
          {tasklist.map((item) => (
            <TaskItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
