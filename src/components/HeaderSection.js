import React from "react";
import AddTask from "./AddTask";

const HeaderSection = () => {
  const addTask = (name) => {
    alert(name);
  };

  return (
    <div className="header-container">
      <h1>Todo List</h1>
      <AddTask onSubmit={addTask} />
    </div>
  );
};

export default HeaderSection;
