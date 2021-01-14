import React from "react";
import Task from "./Task";

const TasksSection = () => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <Task name="lorem" />
      </ul>
    </div>
  );
};

export default TasksSection;
