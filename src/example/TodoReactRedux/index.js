import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import reducers from "./reducers";
import "../../index.scss";
import reduxLogger from "redux-logger";
import reduxPromise from "redux-promise";

const middleware = [reduxLogger, reduxPromise];

const store = createStore(reducers, applyMiddleware(...middleware));
const DOM = document.getElementById("app");

const render = () => {
  if (DOM)
    ReactDOM.render(
      <Provider store={store}>
        <TodoApp />
      </Provider>,
      DOM
    );
};

render();
if (module.hot) {
  module.hot.accept(["./components/TodoApp.js"], () => {
    render();
  });
}
