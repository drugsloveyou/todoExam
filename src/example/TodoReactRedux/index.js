import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import reducers from "./reducers";
import "../../index.scss";

const store = createStore(reducers);
const DOM = document.getElementById("app");

const render = () => {
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
