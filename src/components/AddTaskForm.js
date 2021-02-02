import React, { useState } from "react";

const AddTaskForm = (props) => {
  // Creates a name state with an empty string value
  const [name, setName] = useState('');

  // This function is fired everytime the user types into the add task input field
  // It stores the value of the input field in the name state via the setName updater function
  const handleChange = (e) => {
    setName(e.target.value);
  }

  // Fires when the add task button is pressed
  // Display an alert if the input is empty
  // Fires the addTask function (passing in name) which had been handed down from App.js via props
  // Fires the setName updater function to set name as an empty string
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('Enter a task!');
    } else {
      props.addTask(name);
      setName('');
    }
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          autoComplete="off"
          placeholder="Enter a task"
          value={name}
          onChange={handleChange}
        />
        <input className="btn btn-add" type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default AddTaskForm;
