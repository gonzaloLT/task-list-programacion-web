import React from "react";
import TaskItem from "../TaskItem";

function TaskList({ tasks, setTasks }) {
    const toggleTask = (task) => {
        setTasks(
            tasks.map((t) =>
                t.id === task.id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const handleDelete = (task) => {
        setTasks(tasks.filter((t)=> t.id !== task.id))
    };

    const sortedTasks = [...tasks].sort((a,b) => b.id - a.id);

    return sortedTasks.length > 0 ? (
        <>
            <div className="task-container">
                {sortedTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        handleDelete={handleDelete}
                    ></TaskItem>
                ))}
            </div>
        </>
    ) : (
        <p>No hay tareas aun</p>
    );
}

export default TaskList;
