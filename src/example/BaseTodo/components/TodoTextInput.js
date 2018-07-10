import React, { Component } from "react";

import classnames from "classnames";

export default class TodoTextInput extends Component {
  state = {
    value: this.props.value || ""
  };

  handleChange(e) {
    let value = e.target.value.trim();
    this.setState({ value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      let value = e.target.value.trim();
      if (value.length > 0) {
        this.props.onSave(value);
        if (this.props.newTodo) this.setState({ value: "" });
        else if (this.props.edit) this.props.onBlur();
      }
    }
  }

  render() {
    return (
      <input
        className={classnames({
          "new-todo": this.props.newTodo,
          edit: this.props.edit
        })}
        type="text"
        autoFocus={true}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        onBlur={this.props.onBlur}
      />
    );
  }
}
