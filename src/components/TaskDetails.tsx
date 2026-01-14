
import { useTasksStore } from './store'
import { CheckCircle, Trash2, Clock, } from 'lucide-react'

export default function TaskDetails() {
  const tasks = useTasksStore((state) => state.tasks)
  return (
    <div>
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
              <p>{task.isCompleted}</p>
              <p>{new Date(task.createdAt).toLocaleDateString() }</p>

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
  )
}
