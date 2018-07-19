import React, { Component } from "react";
import classnames from "classnames";
import * as Filters from "../constants/Filters";

const { values } = Object;

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.unCompletedTodo}</strong>
          <span> </span>
          <span>{this.props.unCompletedTodo > 1 ? "items" : "item"}</span>
          <span> left</span>
        </span>
        <ul className="filters">
          {values(Filters).map(value => (
            <li>
              <a
                className={classnames({
                  selected: this.props.filter === value
                })}
                onClick={() => this.props.filterTodo(value)}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
        {this.props.unCompletedTodo == this.props.todoCount ? null : (
          <button
            className="clear-completed"
            onClick={this.props.removeCompleteTodo}
          >
            clear completed
          </button>
        )}
      </footer>
    );
  }
}
