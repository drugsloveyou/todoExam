import React, { Component } from "react";
import TodoList from "./TodoList";

export default class MainSection extends Component {
  handleChange() {
    this.props.completeAllTodo();
  }
  render() {
    return (
      <section className="main">
        {this.props.todos.length > 0 ? (
          <span>
            <input
              className="toggle-all"
              type="checkbox"
              checked={this.props.isCompleteAll}
            />
            <label onClick={this.handleChange.bind(this)}> </label>
          </span>
        ) : null}
        <TodoList
          todos={this.props.todos}
          filter={this.props.filter}
          completeTodo={this.props.completeTodo}
          editTodo={this.props.editTodo}
          deleteTodo={this.props.deleteTodo}
        />
      </section>
    );
  }
}
