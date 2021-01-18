import React from "react";
import Task from "./Task";

const TasksSection = () => {
  return (
    <div className="task-container">
      <ul className="task-list">
        <Task id="todo-one" name="lorem" completed={true} />
        <Task id="todo-two" name="ipsum" completed={false} />
      </ul>
    </div>
  );
};

export default TasksSection;
