import React from "react";

const Task = (props) => {
  return (
    <li className="task">
      <div className="task-top">
        <label htmlFor="checkbox" className="task-check">
          <input id="checkbox" className="checkbox" type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <p className="task-text">
          lorsssssssem lorem loem lossssrem losrem loremsssss lem lorssem lem
          lorem lorem lorssem lorems lormss lorem lorem em lrem lorssem lorem
          rem lorem lorsem lorem lom lorem em
        </p>
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
