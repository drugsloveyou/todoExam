import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          placeholder="What needs to be done?"
          onSave={text => {
            console.log("text", text);
            this.props.addTodo(text);
          }}
        />
      </header>
    );
  }
}
