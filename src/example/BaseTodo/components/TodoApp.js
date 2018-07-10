import React, { Component } from "react";
import TodoItemBean from "../Bean/todoItem";

import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

import { ALL } from "../constants/Filters";

export default class TodoApp extends Component {
  state = {
    todos: [],
    filter: ALL
  };

  addTodo(text) {
    let todos = this.state.todos.concat(new TodoItemBean(text));
    this.setState({ todos });
  }

  completeTodo(id) {
    let todos = this.state.todos.map(
      todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
    );
    this.setState({ todos });
  }

  completeAllTodo() {
    let isCompleteAll = this.state.todos.every(todo => todo.completed);
    let todos = this.state.todos.map(todo => ({
      ...todo,
      completed: !isCompleteAll
    }));
    this.setState({ todos });
  }

  editTodo(id, text) {
    let todos = this.state.todos.map(
      todo =>
        todo.id === id
          ? {
              ...todo,
              text
            }
          : todo
    );
    this.setState({ todos });
  }

  deleteTodo(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  clearCompletedTodo() {
    let todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }

  filteTodo(filter) {
    this.setState({ filter });
  }

  render() {
    const isCompleteAll = this.state.todos.every(todo => todo.completed);

    return (
      <div>
        <Header addTodo={this.addTodo.bind(this)} />
        <MainSection
          {...this.state}
          isCompleteAll={isCompleteAll}
          completeAllTodo={this.completeAllTodo.bind(this)}
          completeTodo={this.completeTodo.bind(this)}
          editTodo={this.editTodo.bind(this)}
          deleteTodo={this.deleteTodo.bind(this)}
        />
        <Footer
          {...this.state}
          clearCompletedTodo={this.clearCompletedTodo.bind(this)}
          filteTodo={this.filteTodo.bind(this)}
        />
      </div>
    );
  }
}
