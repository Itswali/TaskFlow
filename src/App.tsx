import './App.css'
import CreateTask from './components/CreateTask'
import Dashboard from './components/Dashboard'
import TaskManager from './components/TaskManager'
import { Routes, Route, Link } from 'react-router-dom'
import TaskDetails from './components/TaskDetails'

function App() {

  return (
    <>
<div className="app-container">
      <nav>
        <Link to="/"> Dashboard </Link> ||
        <Link to="/create">Create Task</Link> ||
        <Link to="/tasks">Task Manager</Link> ||
        <Link to="/tasks/:id">Task Details</Link> ||
      </nav>

      <hr />

      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />

        {/* Example of a 404 Page */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>

    </>
  )
}

export default App
