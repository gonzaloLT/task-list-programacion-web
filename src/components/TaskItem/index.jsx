import React from 'react'

function TaskItem({task}) {
  const {id, name, completed} = task;
  return (
    <li>
      <input type="checkbox" />
      <span>{name}</span>
      <button><i className="fa-solid fa-trash"></i></button>
    </li>
  )
}

export default TaskItem;