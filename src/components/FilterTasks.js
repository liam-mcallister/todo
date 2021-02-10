import React from "react";

// When a filter button is clicked, fire the setFilter callback function
//  The button name is passed into setFilter and passed back up to App.js
// The filter state will be updated with the new name as its value
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
