import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* Two-Way Binding via props.selected (from parent) */}
        <select
          onChange={(e) => {
            console.log(e.target.value);
            props.selectedYear(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
