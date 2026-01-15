import React from 'react'
import { useTasksStore } from './store'

export default function ShowTask() {
  const tasks = useTasksStore((state)=> state.tasks)
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <h1>{task.description}</h1>
        </div>
      ))}

    </div>
  )
}
