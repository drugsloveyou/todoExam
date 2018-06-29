import React, { Component } from "react";
import classnames from "classnames";
import * as filters from "../constants/Filters";
const { values } = Object;

const Footer = ({
  unCompletedCount,
  todoCount,
  filter,
  filterTodo,
  removeCompleteTodo
}) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{unCompletedCount ? unCompletedCount : "no"}</strong>
      {unCompletedCount > 1 ? " items" : " item"} left
    </span>

    <ul className="filters">
      {values(filters).map(item => (
        <li key={item}>
          <a
            className={classnames({
              selected: item === filter
            })}
            onClick={() => filterTodo(item)}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
    {todoCount - unCompletedCount > 0 ? (
      <button className="clear-completed" onClick={removeCompleteTodo}>
        clear completed
      </button>
    ) : null}
  </footer>
);

export default Footer;
