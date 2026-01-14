import React, { useState } from 'react'
import { useTasksStore, type Task } from './store'

export default function CreateTask() {
const addTask = useTasksStore((state) => state.addTask);

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
 <div className="max-w-2xl mx-auto p-8">
  <div className="bg-white shadow-xl rounded-2xl p-8 border border-slate-100">
    <h2 className="text-2xl font-bold text-slate-800 mb-6">Create New Task</h2>

    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
      {/* Title Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold text-slate-700">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="What needs to be done?"
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-semibold text-slate-700">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          placeholder="Add some details..."
          className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Priority Select */}
        <div className="flex flex-col gap-2">
          <label htmlFor="priority" className="text-sm font-semibold text-slate-700">
            Priority Level
          </label>
          <select
            id="priority"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
            value={data.priority}
            onChange={(e) => setData({ ...data, priority: e.target.value as 'Low' | 'Medium' | 'High' })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Deadline Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="deadline" className="text-sm font-semibold text-slate-700">
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none transition-all"
            value={data.deadline}
            onChange={(e) => setData({ ...data, deadline: e.target.value })}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-amber-200/50 transition-all transform active:scale-[0.98]"
      >
        Add Task to List
      </button>
    </form>
  </div>
</div>
  )

};
