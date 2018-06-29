import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
export default class TodoApp extends Component {
  render() {
    return (
      <div>
        <div>
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              type="text"
              placeholder="What needs to be done?"
            />
          </header>
          <section className="main">
            <span>
              <input
                className="toggle-all"
                id="toggle-all"
                type="checkbox"
                checked="true"
              />
              <label for="toggle-all"> </label>
            </span>
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" checked="true" />
                  <label>Init Redux</label>
                  <button className="destroy" />
                </div>
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Redux</label>
                  <button className="destroy" />
                </div>
              </li>
              <li className="editing">
                <input type="text" className="edit" />
              </li>
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count">
              <strong>2</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>
            <ul className="filters">
              <li>
                <a className="selected">All</a>
              </li>
              <li>
                <a className="">Active</a>
              </li>
              <li>
                <a className="">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">clear completed</button>
          </footer>
        </div>
      </div>
    );
  }
}
const DOM = document.getElementById("app");

const renderDOM = () => {
  render(<TodoApp />, DOM);
};
renderDOM();
