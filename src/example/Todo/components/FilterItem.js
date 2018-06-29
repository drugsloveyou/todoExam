import React from "react";
import classnames from "classnames";
const FilterItem = ({ filter, filterTodo, selected }) => (
  <li key={filter}>
    <a
      className={classnames({
        selected: selected
      })}
      onClick={filterTodo}
    >
      {filter}
    </a>
  </li>
);

export default FilterItem;
