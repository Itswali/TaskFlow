import React, { useState } from 'react'
import { useTasksStore, type Task } from './store'

export default function CreateTask() {
const addTask = useTasksStore((state) => state.addTask);
const Card = useTasksStore((state) => state.tasks)

const [data, setData] = useState({
  title: "",
  description: "",
  priority: 'Low' as 'Low' | 'Medium' | 'High',
  deadline: "",
});


const handleFormSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const newTask: Task = {
      id: Date.now(), // Unique number ID
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: new Date(data.deadline), // Convert string back to Date object
      isCompleted: false,
      createdAt: new Date(),
    };
    addTask(newTask);
    console.log("task has been added")

    // Optional: Reset form
    setData({ title: "", description: "", priority: 'Low', deadline: "" });
}
return (
  <div style={{ padding: '20px' }}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title: <input className="ring-2 ring-amber-700" type="text" value={data.title} onChange={(e) => setData({...data, title: e.target.value})} /></label>
        <label htmlFor="description">Description: <input type="text" value={data.description} className="ring-2 ring-amber-700" onChange={(e) => setData({...data, description: e.target.value})} /></label>
        <label htmlFor="priority">
  Select Priority:
  <select
    name="priority"
    id="priority"
    value={data.priority} // Keeps the UI in sync with state
    onChange={(e) => setData({...data, priority: e.target.value as 'Low' | 'Medium' | 'High'})}
  >
    <option value="" disabled>Select One.</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>
</label>
<label htmlFor="deadline">
  Deadline:
  <input
    type="date"
    className="ring-2 ring-amber-700 ml-2"
    value={data.deadline}
    onChange={(e) => setData({...data, deadline: e.target.value})}
  />
</label>
<button type="submit">Add Task</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Card.map((task) => (
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
    </div>
  )

};
