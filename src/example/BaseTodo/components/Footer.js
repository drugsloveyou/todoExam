import React, { Component } from "react";
import classnames from "classnames";
import * as Filters from "../constants/Filters";
import { getUnCompleteTodo } from "../selectors";

const { values } = Object;

export default class Footer extends Component {
  render() {
    const unCompletedTodo = getUnCompleteTodo(this.props.todos);

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompletedTodo}</strong>
          <span> </span>
          <span>{unCompletedTodo > 1 ? "items" : "item"}</span>
          <span> left</span>
        </span>
        <ul className="filters">
          {values(Filters).map(value => (
            <li>
              <a
                className={classnames({
                  selected: this.props.filter === value
                })}
                onClick={() => this.props.filteTodo(value)}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
        {unCompletedTodo == this.props.todos.length ? null : (
          <button
            className="clear-completed"
            onClick={this.props.clearCompletedTodo}
          >
            clear completed
          </button>
        )}
      </footer>
    );
  }
}
