import React, { Component } from "react";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";
export default class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleDeleteTodo(id) {
    this.props.deleteTodo(id);
  }

  handleSave(id, text) {
    if (text) {
      this.props.editTodo(id, text);
    } else {
      this.props.deleteTodo(id);
    }
    this.setState({ editing: false });
  }

  render() {
    return (
      <li
        className={classnames({
          completed: this.props.completed,
          editing: this.state.editing
        })}
      >
        {this.state.editing ? (
          <TodoTextInput
            editing={this.state.editing}
            value={this.props.text}
            onSave={text => this.handleSave(this.props.id, text)}
          />
        ) : (
          <div
            className="view"
            onDoubleClick={this.handleDoubleClick.bind(this)}
          >
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={() => this.props.completeTodo(this.props.id)}
            />
            <label>{this.props.text}</label>
            <button
              className="destroy"
              onClick={() => this.handleDeleteTodo(this.props.id)}
            />
          </div>
        )}
      </li>
    );
  }
}
