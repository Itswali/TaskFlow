import React, { useState } from 'react'
import { useTasksStore, type Task } from './store'

export default function Tasks() {
  const addTask = useTasksStore((state) => state.addTask)
  const [data, setData] = useState({
    title: "",
  description: "",
  priority: 'Low' as 'Low' | 'Medium' | 'High',
  deadline: "",
  });



  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTasks: Task = {
      id: Date.now(), // Unique number ID
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: new Date(data.deadline), // Convert string back to Date object
      isCompleted: false,
      createdAt: new Date(),
    };
    addTask(newTasks);
    setData({title: "", description: "", priority: "Low", deadline: ""})
  }
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
  return (
    <div>
      <form onSubmit={handleTaskSubmit}>
  {/* Title Input */}
  <input
    name="title"
    value={data.title}
    onChange={handleChange}
    placeholder="Task Title"
  />

  <textarea
    name="description"
    value={data.description}
    onChange={handleChange}
    placeholder='Task Desciption'
  />

  <select name="priority" value={data.priority} onChange={handleChange}>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>

  <button type="submit">Add Task</button>
</form>

    </div>
  )
}
