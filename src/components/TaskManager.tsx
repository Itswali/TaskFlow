import { useTasksStore } from './store'
import { CheckCircle, Trash2, Clock, AlertCircle } from 'lucide-react' // Optional: Install lucide-react for icons

export default function TaskManager() {
  const tasks = useTasksStore((state) => state.tasks)

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 text-slate-500">
        <div className="bg-slate-100 p-6 rounded-full mb-4">
          <AlertCircle size={48} className="text-slate-400" />
        </div>
        <p className="text-xl font-medium">No tasks found</p>
        <p className="text-sm">Click "Create Task" to get started!</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Your Tasks</h1>
        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-semibold">
          Total: {tasks.length}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`group relative bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              task.isCompleted ? 'border-emerald-100 bg-emerald-50/20' : 'border-slate-200 shadow-sm'
            }`}
          >
            {/* Priority Badge */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-[10px] uppercase tracking-wider font-black px-2.5 py-1 rounded-md shadow-sm ${
                task.priority === 'High' ? 'bg-red-500 text-white' :
                task.priority === 'Medium' ? 'bg-amber-400 text-amber-950' :
                'bg-emerald-400 text-emerald-950'
              }`}>
                {task.priority}
              </span>

              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 {/* Delete Button placeholder */}
                 <button className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                 </button>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className={`font-bold text-lg mb-2 leading-tight ${task.isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                {task.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                {task.description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock size={14} />
                <span className="text-xs font-medium">
                   {new Date(task.deadline).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </div>

              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  task.isCompleted
                    ? 'bg-emerald-100 text-emerald-600'
                    : 'bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                <CheckCircle size={14} />
                {task.isCompleted ? 'Done' : 'Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
