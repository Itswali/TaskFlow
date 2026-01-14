import { useTasksStore } from './store'

export default function TaskManager() {
  const tasks = useTasksStore((state) => state.tasks)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
      <div
              key={task.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg text-slate-900">{task.title}</h3>
                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
                  task.priority === 'High' ? 'bg-red-100 text-red-600' :
                  task.priority === 'Medium' ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {task.priority}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {task.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400">Due: {task.deadline.toLocaleDateString()}</span>
                <span className={`text-xs font-medium ${task.isCompleted ? 'text-emerald-500' : 'text-slate-400'}`}>
                  {task.isCompleted ? '✓ Completed' : '○ Pending'}
                </span>
              </div>
            </div>
      ))}
    </div>
  )
}
