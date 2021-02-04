import React, { useState } from "react";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName === "") {
      alert("Enter a task!");
    } else {
      props.editTask(props.id, newName);
      setNewName("");
      setIsEditing(false);
    }
  };

  const editTemplate = (
    <>
      <form onSubmit={handleSubmit}>
        <div className="task-top-edit">
          <label htmlFor={props.id} className="editLabel">
            Edit your task
          </label>
          <input
            id={props.id}
            className="edit-task"
            type="text"
            autoComplete="off"
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div className="task-bottom">
          <input
            className="btn btn-task btn-cancel"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
          <input className="btn btn-task btn-save" type="submit" value="Save" />
        </div>
      </form>
    </>
  );

  const viewTemplate = (
    <>
      <div className="task-top">
        <label htmlFor={props.id} className="task-check">
          <input
            id={props.id}
            className="checkbox"
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <span className="checkmark"></span>
        </label>
        <p className="task-text">{props.name}</p>
      </div>
      <div className="task-bottom">
        <input
          className="btn btn-task btn-edit"
          type="button"
          value="Edit"
          onClick={() => setIsEditing(true)}
        />
        {/*Fires the deleteTask function which is passed down via props*/}
        <input
          className="btn btn-task btn-delete"
          type="button"
          value="Delete"
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </>
  );

  // If isEditing is true then render the editTemplate, otherwise render the viewTemplate
  return <li className="task">{isEditing ? editTemplate : viewTemplate}</li>;
};

export default Task;
