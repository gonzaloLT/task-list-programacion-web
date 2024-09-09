import React from "react";

function TaskItem({ task, toggleTask }) {
  const { name, completed } = task;
  return (
    <li>
      <div className={task.completed ? 'task-completed' : ''}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(task)}
        />
        <span>{name}</span>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
