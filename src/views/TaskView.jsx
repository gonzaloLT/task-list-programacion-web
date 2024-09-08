import React from "react";
import Form from "../components/Form";
import Title from "../components/Title";
import TaskList from "../components/TaskList";
import { useState } from "react";

function TaskView() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "tareaaa1", completed: false },
    { id: 2, name: "tarea2", completed: false },
  ]);

  return (
    <div className="container">
      <Title title={"Lista de tareas de Gonzalo"}></Title>
      <Form></Form>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default TaskView;
