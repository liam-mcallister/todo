import React from "react";

const Task = (props) => {
  return (
    <li className="task">
      <div className="task-top">
        <label htmlFor={props.id} className="task-check">
          <input
            id={props.id}
            className="checkbox"
            type="checkbox"
            defaultChecked={props.completed}
          />
          <span class="checkmark"></span>
        </label>
        <p className="task-text">{props.name}</p>
      </div>
      <div className="task-bottom">
        <input className="btn btn-task btn-edit" type="button" value="Edit" />
        <input
          className="btn btn-task btn-delete"
          type="button"
          value="Delete"
        />
      </div>
    </li>
  );
};

export default Task;
