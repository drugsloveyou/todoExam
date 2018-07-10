import React, { Component } from "react";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";
/*<input
            type="text"
            className="edit"
            value={this.props.text}
            autoFocus={true}
            onKeyDown={this.handleKeyDown.bind(this)}
          onBlur={this.handleBlur.bind(this)} 
          />*/

export default class TodoItem extends Component {
  state = {
    editing: false
  };

  handleDoubleClick() {
    this.setState({
      editing: true
    });
  }

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      this.setState({
        editing: false
      });
    }
  }

  handleBlur(e) {
    if (e) {
      let value = e.target.value.trim();
      if (value) {
        this.handleSave(value);
      }
    }

    this.setState({
      editing: false
    });
  }

  handleChange(id) {
    this.props.completeTodo(id);
  }

  handleSave(text) {
    this.props.editTodo(this.props.id, text);
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
            edit
            value={this.props.text}
            onSave={text => this.handleSave(text)}
            onBlur={this.handleBlur.bind(this)}
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
              onChange={() => this.handleChange(this.props.id)}
            />
            <label>{this.props.text}</label>
            <button className="destroy" onClick={()=>this.props.deleteTodo(this.props.id)}/>
          </div>
        )}
      </li>
    );
  }
}
