import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    console.log(this.props)
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => (
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
