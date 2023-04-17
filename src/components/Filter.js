import React from "react";

function Filter({ onChangeFilter }) {
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter-input">Filter shown with: </label>
      <input
        className="input-filter"
        id="filter-input"
        onChange={onChangeFilter}
      />
    </div>
  );
}

export default Filter;
