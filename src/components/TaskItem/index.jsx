import React from 'react'

function TaskItem({task}) {
  return (
    <li>
      <input type="checkbox" />
      <span>{task}</span>
      <button><i className="fa-solid fa-trash"></i></button>
    </li>
  )
}

export default TaskItem;