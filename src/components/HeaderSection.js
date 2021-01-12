import React from "react";
import AddTask from "./AddTask";

const HeaderSection = () => {
  return (
    <div className="header-container">
      <h1>Todo List</h1>
      <AddTask />
    </div>
  );
};

export default HeaderSection;
