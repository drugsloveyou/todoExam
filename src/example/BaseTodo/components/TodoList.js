import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { filterTodo } from "../selectors";

export default class TodoList extends Component {
  render() {
    const todos = filterTodo(this.props.todos, this.props.filter);

    return (
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            completeTodo={this.props.completeTodo}
            editTodo={this.props.editTodo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
