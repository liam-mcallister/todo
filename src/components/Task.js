import React, { useState } from "react";

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editTemplate = (
    <>
      <form>
        <div className="task-top-edit">
          <label htmlFor={props.id} className="editLabel">Edit your task</label>
          <input id={props.id} type="text" />
        </div>
        <div className="task-bottom">
          <input className="btn btn-task btn-cancel" type="button" value="Cancel" onClick={() => setIsEditing(false)} />
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
        <input className="btn btn-task btn-edit" type="button" value="Edit" onClick={() => setIsEditing(true)} />
        <input
          className="btn btn-task btn-delete"
          type="button"
          value="Delete"
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </>
  );

  return (
    <li className="task">{isEditing ? editTemplate : viewTemplate}</li>
  );
};

export default Task;
