import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import ViewTask from "./viewTask";
import Timer from "./Timer";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("home");
  const [data, setData] = useState(() => {
    const savedTasks = localStorage.getItem("my-tasks");
    return savedTasks ? JSON.parse(savedTasks): [];
  });
  useEffect(() => {
    localStorage.setItem("my-tasks", JSON.stringify(data));
  }, [data]);

  const initialInputRef = useRef(null);
  useEffect(() => {
    if (initialInputRef.current) {
      initialInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title: title,
      desc: desc,
      category: category,
      completed: false,
    };
    setData([...data, newTask]);
    setTitle("");
    setDesc("");
    setCategory("home");
  };
const toggleComplete = (id) => {
  setData(data.map(task => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  }));
};

const deleteTask = (id) => {
  setData(data.filter(task => task.id !== id));
};

const clearTask = () => {
  setData(data.filter(t => !t.completed))
}

const editTask = (id, newData) => {
  setData(data.map(task =>
    task.id === id ? {...task, ...newData} : task
  ));
}


  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      {/* <Timer /> */}
      <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <div className="flex flex-col">
          <label htmlFor="title" className="font-semibold">Title:</label>
          <input
            id="title"
            type="text"
            required
            value={title}
            ref={initialInputRef}
            className="ring-sky-400 ring-2 rounded-md p-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold">Description:</label>
          <input required
            id="description"
            type="text"
            value={desc}
            className="ring-sky-400 ring-2 rounded-md p-2"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Category:</label>
          <select
            className="ring-sky-400 ring-2 rounded-md p-2"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="home">Home</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-sky-500 text-white px-6 py-2 rounded-md font-bold hover:bg-sky-600 transition shadow-md"
        >
          Add Task
        </button>
      </form>

      <hr className="my-8" />

      <ViewTask tasks={data} onToggle={toggleComplete} onDelete={deleteTask} onEdit={editTask} onClear={clearTask}/>
    </div>
  );
}
