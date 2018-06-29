import React, { Component } from "react";
import TodoList from "../containers/TodoList";
const MainSection = ({ todoCount, isAllCompleted, completeAllTodo }) => (
  <section className="main">
    {todoCount === 0 ? null : (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={isAllCompleted}
        />
        <label onClick={completeAllTodo}> </label>
      </span>
    )}
    <TodoList />
  </section>
);

export default MainSection;
