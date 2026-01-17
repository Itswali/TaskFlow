import React, { useState } from 'react'


export default function ViewTask({ tasks, onToggle, onDelete, onEdit, onClear }) {
  const [query, setQuery] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  if (!tasks) return null;

  const startEdit = (task) => {
    setEditId(task.id);
    setEditText(task.title); // Set the current title in the input
  };


  const handleSave = (id) => {
    onEdit(id, { title: editText });
    setEditId(null); // Close the edit mode
  };



  const filteredTasks = tasks.filter((task) =>
    task.category.toLowerCase().includes(query.toLocaleLowerCase())
  );

return (
    <div className="p-4">
      {/* Search Input Section */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <label className="block font-bold mb-2">Search by Category:</label>
        <input
          type="text"
          className='ring-2 ring-indigo-500 rounded p-1'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'home' or 'work'..."
        />
      </div>

      <h2 className="text-xl font-bold border-b pb-2">Task List</h2>
       <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200" onClick={onClear}>Clear All Completed Tasks</button>
      {/* Logic to show the list */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div key={task.id} className="border p-4 my-2 rounded shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3 flex-grow">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />

              {/* CONDITIONAL RENDERING: Show Input if editing, else show Title */}
              {editId === task.id ? (
                <input
  className="ring-2 ring-orange-400 p-1 rounded"
  value={editText}
  onChange={(e) => setEditText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') handleSave(task.id);
    if (e.key === 'Escape') setEditId(null); // Bonus: Cancel on Escape
  }}
  autoFocus
/>
              ) : (
                <div>
                  <h3 className={`text-lg font-bold ${task.completed ? 'line-through text-gray-400' : 'text-indigo-700'}`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-600">{task.desc}</p>
                  <span className="text-xs bg-indigo-100 px-2 py-1 rounded">{task.category}</span>
                  <span className="text-sm font-medium">
              {task.completed ? "✅ Completed" : "⏳ Pending"}
            </span>
                </div>
              )}
            </div>

            <div className="flex gap-2">

              {editId === task.id ? (
                <button
                  onClick={() => handleSave(task.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEdit(task)}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded hover:bg-blue-200"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-red-500 mt-4">No tasks found!</h1>
      )}

    </div>
  )
}
