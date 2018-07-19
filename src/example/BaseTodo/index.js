import React from "react";
import { render } from "react-dom";

import reduxPromise from "redux-promise";
import reduxLogger from "redux-logger";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./reudcers";
import TodoApp from "./components/TodoApp";
import "./index.css";

const middleware = [reduxLogger, reduxPromise];
const store = createStore(reducer, applyMiddleware(...middleware));
const DOM = document.getElementById("app");

const renderDOM = () => {
  render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    DOM
  );
};

if (module.hot) {
  module.hot.accept(["./components/TodoApp.js"], () => {
    renderDOM();
  });
}
renderDOM();
