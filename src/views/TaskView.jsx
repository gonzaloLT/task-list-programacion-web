import React from "react";
import Form from "../components/Form";
import Title from "../components/Title";
import TaskList from "../components/TaskList";

function TaskView() {
  return (
    <div className="container">
      <Title title={"Lista de tareas de Gonzalo"}></Title>
      <Form></Form>
      <TaskList></TaskList>
    </div>
  );
}

export default TaskView;
