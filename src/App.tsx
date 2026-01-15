import './App.css'
import ShowTask from './components/ShowTask'
import Tasks from './components/Tasks'
import { Link, Routes, Route } from 'react-router-dom'
// import CreateTask from './components/CreateTask'
// import Dashboard from './components/Dashboard'
// import TaskManager from './components/TaskManager'

function App() {

  return (
    <>
    <nav>
        <Link to="/">Create Task</Link> |
        <Link to="/view">View Task</Link>
      </nav>

  <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Tasks />} />
        <Route path="/view" element={<ShowTask />} />

        {/* Example of a 404 Page */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App
