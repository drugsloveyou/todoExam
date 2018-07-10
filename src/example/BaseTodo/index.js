import React from "react";
import { render } from "react-dom";

import TodoApp from "./components/TodoApp";

import "./index.css";

const DOM = document.getElementById("app");

const renderDOM = () => {
  render(<TodoApp />, DOM);
};

if (module.hot) {
  module.hot.accept(["./components/TodoApp.js"], () => {
    renderDOM();
  });
}
renderDOM();
