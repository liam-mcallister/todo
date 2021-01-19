import React, { useState } from "react";

const AddTaskForm = (props) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

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
        <input className="addtask" type="text" autoComplete="off" value={name} onChange={handleChange} />
        <input className="btn btn-add" type="submit" value="Do it" />
      </form>
    </div>
  );
};

export default AddTaskForm;