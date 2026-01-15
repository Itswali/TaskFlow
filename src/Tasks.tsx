import React from 'react'
import { useTasksStore } from './components/store'

export default function Tasks() {
  const Newtask = useTasksStore((state) => state.addTask)


  const handleTaskSubmit = () => {

  }
  return (
    <div>
      <form action="get" onSubmit={handleTaskSubmit}>
        <input type="text"  />
      </form>

    </div>
  )
}
