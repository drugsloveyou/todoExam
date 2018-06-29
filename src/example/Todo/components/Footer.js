import React, { Component } from "react";

import FilterList from "./FilterList";

export default class Footer extends Component {
  render() {
    const leftCount = this.props.todos.reduce(
      (count, todo) => (!todo.completed ? count + 1 : count),
      0
    );

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftCount ? leftCount : "no"}</strong>
          {leftCount > 1 ? " items" : " item"} left
        </span>
        <FilterList
          filter={this.props.filter}
          filterTodo={this.props.filterTodo}
        />
        {this.props.todos.length - leftCount > 0 ? (
          <button
            className="clear-completed"
            onClick={this.props.deleteCompletedTodo}
          >
            clear completed
          </button>
        ) : null}
      </footer>
    );
  }
}
