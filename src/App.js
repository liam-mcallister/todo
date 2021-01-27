import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterTasks from "./components/FilterTasks";
import Task from "./components/Task";
import "./App.css";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Finished: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

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

  const tasklist = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
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

  const filterList = FILTER_NAMES.map((name) => (
    <FilterTasks
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="container">
      <div className="header-container">
        <h1>Task Tracker</h1>
        <AddTaskForm addTask={addTask} />
      </div>

      <div className="filter-container">
        <div className="filter-tasks">
          {filterList}
        </div>
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
