import React, { Component } from "react";
import TodoList from "./TodoList";
import * as filters from "../constants/Filters";

function getFilterTodo(todos, filter) {
  switch (filter) {
    case filters.ALL:
      return todos;
    case filters.ACTIVE:
      return todos.filter(todo => !todo.completed);
    case filters.COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

export default class MainSection extends Component {
  render() {
    const todos = getFilterTodo(this.props.todos, this.props.filter);
    return (
      <section className="main">
        {this.props.todos.length === 0 ? null : (
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={this.props.isAllCompleted}
            />
            <label onClick={this.props.completeAllTodo}> </label>
          </span>
        )}
        <TodoList
          todos={todos}
          deleteTodo={this.props.deleteTodo}
          editTodo={this.props.editTodo}
          completeTodo={this.props.completeTodo}
        />
      </section>
    );
  }
}
