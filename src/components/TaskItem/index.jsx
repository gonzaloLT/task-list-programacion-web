import React from "react";

function TaskItem({ task, toggleTask }) {
  const { name, completed } = task;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(task)}
      />
      <span>{name}</span>
      <button>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export default TaskItem;
