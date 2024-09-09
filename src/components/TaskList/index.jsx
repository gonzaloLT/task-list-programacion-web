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

    return tasks.length > 0 ? (
        <>
            <div className="task">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                    ></TaskItem>
                ))}
            </div>
        </>
    ) : (
        <p>No hay tareas aun</p>
    );
}

export default TaskList;
