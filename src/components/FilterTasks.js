import React from "react";

const FilterTasks = (props) => {
  return (
    <input
      className="btn btn-filter"
      type="button"
      value={props.name}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    />
  );
};

export default FilterTasks;
