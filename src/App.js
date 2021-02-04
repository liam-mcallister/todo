import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import FilterTasks from "./components/FilterTasks";
import Task from "./components/Task";
import "./App.css";
import { nanoid } from "nanoid";

// Object that stores the three filters
// All returns all tasks
// Active returns the tasks that are not completed
// Finished returns all completed tasks
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Finished: (task) => task.completed
};

// Creates an array of FILTER_MAP keys (All, Active and Finished)
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // Creates a tasks state that takes the placeholder tasks from index.js via props
  const [tasks, setTasks] = useState(props.tasks);
  // Creates a filter state with a string value of 'All'
  const [filter, setFilter] = useState('All');

  // Callback function to add a task to the list
  // Creates a newTask object with a unique id (nanoid plugin), a name using the add task input and a false completed value
  // Fires the setTasks function which adds the newTask to the tasks array and updates the state
  const addTask = (name) => {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Function to edit a task
  // 
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
  // Gets fired from clicking the delete button on a task
  // Creates a new array by filtering the tasks array and returning the remaining tasks whose id does not match the deleted one
  // Fires the setTasks function to update the tasks state by passing in the new remainingTasks array
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

  // Maps through the list of tasks and creates a Task component for each one
  // Passes each Task an id, name, completed and key attribute
  // toggleTaskCompleted, editTask and deleteTask functions are passed down to FilterTasks.js via props
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
          {/* Renders the filter buttons */}
          {filterList}
        </div>
      </div>

      <div className="task-container">
        <ul className="task-list">
          {/* Renders the list of tasks */}
          {tasklist}
        </ul>
      </div>
    </div>
  );
}

export default App;
