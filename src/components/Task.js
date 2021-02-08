import React, { useState } from "react";

const Task = (props) => {
  // Creates a isEditing state that is set to false
  const [isEditing, setIsEditing] = useState(false);
  // Creates a newName state with an empty string value
  const [newName, setNewName] = useState("");

  // Fired everytime the user types into the edit task input field
  // It stores the value of the input field in the newName state via the setNewName updater function
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  // Fired when the save button is clicked
  // If there has been nothing entered an alert will display
  // Otherwise the editTask callback function is called from props (id and newName is passed in)
  // + the newName state is set to an empty string
  // + the isEditing state is set to false
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
          {/*Fires an anonymous function that sets the setIsEditing state to false*/}
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
        {/*Fires an anonymous function that sets the setIsEditing state to true*/}
        <input
          className="btn btn-task btn-edit"
          type="button"
          value="Edit"
          onClick={() => setIsEditing(true)}
        />
        {/*Fires an anonymous function that fires the deleteTask callback function which is passed down via props*/}
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
