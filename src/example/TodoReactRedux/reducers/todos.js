import {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  completeAllTodo,
  removeCompleteTodo
} from "../actions";

import TodoItemBean from "../bean/TodoItem";

import { handleActions } from "redux-actions";

const initState = [new TodoItemBean("Init Redux.")];
export default handleActions(
  {
    [addTodo]: (state, action) =>
      state.concat(new TodoItemBean(action.payload.text)),

    [editTodo]: (state, action) =>
      state.map(
        todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text
              }
            : todo
      ),

    [deleteTodo]: (state, action) =>
      state.filter(todo => todo.id !== action.payload.id),

    [completeTodo]: (state, action) =>
      state.map(
        todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      ),

    [completeAllTodo]: state => {
      const isAllCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !isAllCompleted }));
    },

    [removeCompleteTodo]: state => state.filter(todo => !todo.completed)
  },
  initState
);
