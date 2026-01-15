import { useParams } from 'react-router-dom';
import { useTasksStore } from './store';

export default function TaskDetails() {
  const { id } = useParams(); // Grabs "id" from the URL
  const findTask = useTasksStore((state) => state.findTask);

  // Convert string id to number for the store
  const task = findTask(Number(id));

  if (!task) {
    return <div className="p-10 text-center">Task with ID {id} not found.</div>;
  }

  return (
    <div className="p-10 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold mb-4">{task.title}</h1>
      <div className={`inline-block px-3 py-1 rounded mb-4 ${task.isCompleted ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
        Status: {task.isCompleted ? 'Completed' : 'Pending'}
      </div>
      <p className="text-slate-600 text-lg">{task.description}</p>
      {/* Add more details here like deadline, priority, etc. */}
    </div>
  );
}
