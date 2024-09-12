import React, { useState } from "react";

function Form({ tasks, setTasks }) {
    const [newTaskName, setNewTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTaskName.trim() === "") {
            alert("Introduzca un nombre de tarea");
            return;
        }
        const newTask = {
            id: Date.now(),
            name: newTaskName,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setNewTaskName("");
    };

    return (
        <form action="" className="input-task" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input-task-text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                autoFocus
            />
            <button type="submit" className="input-task-button">
                ADD
            </button>
        </form>
    );
}

export default Form;
