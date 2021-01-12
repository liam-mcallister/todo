import React from "react";

const AddTask = () => {
  return (
    <div className="add-task">
      <input className="addtask" type="text" />
      <input className="btn btn-add" type="submit" value="Do it" />
    </div>
  );
};

export default AddTask;
