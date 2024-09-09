import React, { useState } from "react";

function Form({ tasks, setTasks }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Introduzca un nombre de tarea");
      return;
    }
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: newTaskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        autoFocus
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Form;
