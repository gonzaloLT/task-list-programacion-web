import React from "react";

function TaskItem({ task, toggleTask, handleDelete }) {
    const { name, completed } = task;

    return (
        <li className={`task ${completed ? "completed" : ""}`}>
            <input
                className="checkbox"
                type="checkbox"
                checked={completed}
                onChange={() => toggleTask(task)}
            />
            <span className="text-task">{name}</span>
            <button onClick={() => handleDelete(task)} className="delete-task">
                <i className="fa-solid fa-trash"></i>
            </button>
        </li>
    );
}

export default TaskItem;
