import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterTasks from "./components/FilterTasks";
import Task from "./components/Task";
import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const tasklist = tasks.map((task) => <Task id={task.id} name={task.name} completed={task.completed} key={task.id} />);

  const addTask = (name) => {
    const newTask = { id: 'id', name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <div className="header-container">
        <h1>Todo List</h1>
        <AddTaskForm addTask={addTask} />
      </div>

      <div className="filter-container">
        <FilterTasks />
      </div>

      <div className="task-container">
        <ul className="task-list">
          {tasklist}
        </ul>
      </div>
    </div>
  );
}

export default App;
