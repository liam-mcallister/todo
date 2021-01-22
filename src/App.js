import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterTasks from "./components/FilterTasks";
import Task from "./components/Task";
import "./App.css";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  // Function to add a task to the list
  const addTask = (name) => {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to edit a task
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  // Function to delete a task from the list
  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const tasklist = tasks.map((task) => (
    <Task
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="container">
      <div className="header-container">
        <h1>Task Tracker</h1>
        <AddTaskForm addTask={addTask} />
      </div>

      <div className="filter-container">
        <FilterTasks />
      </div>

      <div className="task-container">
        <ul className="task-list">{tasklist}</ul>
      </div>
    </div>
  );
}

export default App;
