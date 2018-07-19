import React, { Component } from "react";

import classnames from "classnames";

export default class TodoTextInput extends Component {
  state = {
    value: this.props.value || ""
  };

  handleKeyDown(e) {
    const text = e.target.value.trim();
    if (text.length && e.keyCode === 13) {
      this.props.onSave(e.target.value);
      if (this.props.newTodo) this.setState({ value: "" });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        type="text"
        className={classnames({
          "new-todo": this.props.newTodo,
          edit: this.props.editing
        })}
        autoFocus={true}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onKeyDown={this.handleKeyDown.bind(this)}
        onChange={this.handleChange.bind(this)}
        onBlur={this.handleBlur.bind(this)}
      />
    );
  }
}
