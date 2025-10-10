import React, { useState } from 'react'

export default function Taskform() {
  const [task, setTask]=useState('');
  const [priority, setPriority]=useState('medium');
  const [category, setCategory]=useState('General');
  return (
      <form id='task-form'>
        <div id='inp'>
          <input type="text" placeholder="Enter the task" 
          onChange={(e)=> setTask(e.target.value)}/>
          <button type="submit">Add task</button>
          {/* <h1>{task}</h1> */}
        </div>
      <div id='btns'>
        <select onChange={(e)=> setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select onChange={(e)=> setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      {/* <h1>{task} {priority} {category}</h1> */}
    </form>
  )
}
