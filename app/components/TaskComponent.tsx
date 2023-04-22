import { Task } from "@/types/tasks";
import React from "react";

interface TaskProp {
  task: Task;
}

const TaskComponent: React.FC<TaskProp> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>

      <td>Blue</td>
    </tr>
  );
};

export default TaskComponent;
