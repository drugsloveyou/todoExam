import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import "../../index.scss";

const DOM = document.getElementById("app");
const render = () => {
  ReactDOM.render(<TodoApp />, DOM);
};

render();
if (module.hot) {
  module.hot.accept(["./components/TodoApp.js"], () => {
    render();
  });
}
