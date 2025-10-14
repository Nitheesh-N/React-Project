
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import ProgressTracker from './components/ProgressTracker'
import { useEffect, useState } from 'react'

export default function App() {

  const [tasks, settasks] = useState([]);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })
  const addTask=(task)=>{
    settasks([... tasks,task]);
  }
  return (
    <div>
      <h1>TaskBuddy</h1>
      <p>Your Friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <ProgressTracker />
      <button>Clear all Tasks</button>
    </div>
  )
}
