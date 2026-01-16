import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import ViewTask from "./viewTask";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("home");
  const [data, setData] = useState([]);

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
    };
    setData([...data, newTask]);
    setTitle("");
    setDesc("");
    setCategory("home");
  };


  return (
    <div>
      <form action="get" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            value={title}
            ref={initialInputRef}
            className="ring-sky-400 ring-2 rounded-md p-2 m-2"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            value={desc}
            className="ring-sky-400 ring-2 rounded-md p-2 m-2"
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          Category:
          <option value="select one:" disabled></option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <ViewTask tasks={data} />
    </div>
  );
}
