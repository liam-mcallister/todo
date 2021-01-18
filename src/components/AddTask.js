import React from "react";

const AddTask = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit("Hello");
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input className="addtask" type="text" autoComplete="off" />
        <input className="btn btn-add" type="submit" value="Do it" />
      </form>
    </div>
  );
};

export default AddTask;
