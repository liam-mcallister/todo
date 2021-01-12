import React from "react";

const FilterTasks = () => {
  return (
    <div className="filter-tasks">
      <input className="btn btn-filter" type="submit" value="All" />
      <input className="btn btn-filter" type="submit" value="Active" />
      <input className="btn btn-filter" type="submit" value="Finished" />
    </div>
  );
};

export default FilterTasks;
