import React from 'react'

export default function ViewTask({ tasks }) {
  if (!tasks) return null;
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border p-2 m-2">
          <h2>{task.title}</h2>
          <p>{task.desc}</p>
          <span>{task.category}</span>
        </div>
      ))}
    </div>
  )
}
