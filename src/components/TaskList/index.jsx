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

    return tasks.length > 0 ? (
        <>
            <div className="task">
                {tasks.map((task) => (
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
