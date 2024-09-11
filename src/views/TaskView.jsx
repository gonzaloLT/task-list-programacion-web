import React from "react";
import Form from "../components/Form";
import Title from "../components/title";
import TaskList from "../components/TaskList";
import { useState } from "react";

function TaskView() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <Title title={"Lista de tareas de Gonzalo"}></Title>
      <Form tasks={tasks} setTasks={setTasks}></Form>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </div>
  );
}

export default TaskView;
