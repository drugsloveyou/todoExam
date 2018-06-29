import React from "react";
import * as filters from "../constants/Filters";
import FilterItem from "./FilterItem";
const { values } = Object;

const FilterList = ({ filter, filterTodo }) => (
  <ul className="filters">
    {values(filters).map(item => (
      <FilterItem
        key={item}
        filter={item}
        selected={item === filter}
        filterTodo={() => filterTodo(item)}
      />
    ))}
  </ul>
);

export default FilterList;
