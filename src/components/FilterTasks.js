import React from "react";

const FilterTasks = () => {
  return (
    <div className="filter-tasks">
      <input className="btn btn-filter" type="button" value="All" />
      <input className="btn btn-filter" type="button" value="Active" />
      <input className="btn btn-filter" type="button" value="Finished" />
    </div>
  );
};

export default FilterTasks;
