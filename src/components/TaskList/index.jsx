import React from "react";
import TaskItem from "../TaskItem";

function TaskList({ tasks }) {
  return tasks.map((task) => {
    return <TaskItem key={task.id} task={task}></TaskItem>;
  });
}

export default TaskList;
