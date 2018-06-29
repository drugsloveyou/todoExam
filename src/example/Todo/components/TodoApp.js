import React, { Component } from "react";

import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

import { ALL } from "../constants/Filters";
import TodoItemBean from "../bean/TodoItem";

export default class TodoApp extends Component {
  state = {
    todos: [],
    filter: ALL
  };

  addTodo(text) {
    const todos = this.state.todos.concat(new TodoItemBean(text));
    this.setState({ todos });
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  editTodo(id, text) {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, text: text } : todo)
    );
    this.setState({ todos });
  }

  completeTodo(id) {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
    this.setState({ todos });
  }

  completeAllTodo() {
    const isAllCompleted = this.state.todos.every(todo => todo.completed);
    const todos = this.state.todos.map(todo => ({
      ...todo,
      completed: !isAllCompleted
    }));
    this.setState({ todos });
  }

  deleteCompletedTodo() {
    const todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  }

  filterTodo(filter) {
    this.setState({ filter });
  }

  render() {
    const isAllCompleted = this.state.todos.every(todo => todo.completed);
    return (
      <div>
        <Header {...this.state} addTodo={this.addTodo.bind(this)} />
        <MainSection
          {...this.state}
          isAllCompleted={isAllCompleted}
          deleteTodo={this.deleteTodo.bind(this)}
          editTodo={this.editTodo.bind(this)}
          completeTodo={this.completeTodo.bind(this)}
          completeAllTodo={this.completeAllTodo.bind(this)}
        />
        <Footer
          {...this.state}
          deleteCompletedTodo={this.deleteCompletedTodo.bind(this)}
          filterTodo={this.filterTodo.bind(this)}
        />
      </div>
    );
  }
}
