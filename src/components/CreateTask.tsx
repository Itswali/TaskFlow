import React from 'react'
import { useTasksStore } from './store'

export default function CreateTask() {
const data = useTasksStore((state) => state);
  return (
    <div>
      <h1>ID: {data.id}</h1>
            <h1>Title: {data.title}</h1>
                  <h1>Description: {data.description}</h1>
                        <h1>Priority: {data.priority}</h1>
    </div>
  )
}
