import React from 'react'
import ProgressTracker from './components/ProgressTracker.jsx'
import Taskform from './components/Taskform.jsx'
import Tasklist from './components/Tasklist.jsx'
export default function App() {
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p>Your Friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <ProgressTracker />
      <button>Clear all Tasks</button>
    </div>
  )
}
