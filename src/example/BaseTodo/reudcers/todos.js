import { handleActions } from "redux-actions";
import todoItemBean from "../Bean/todoItem";
import {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  completeAllTodo,
  removeCompleteTodo
} from "../actions";

const initState = [];
export default handleActions(
  {
    [addTodo]: {
      next(state, action) {
        return state.concat(new todoItemBean(action.payload.text));
      },
      throw(state, action) {
        return action.payload.errMsg;
      }
    },
    [editTodo]: (state, action) =>
      state.map(todo => {
        return todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text
            }
          : todo;
      }),
    [deleteTodo]: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    [completeTodo]: (state, action) => {
      return state.map(
        todo =>
          todo.id === action.payload.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );
    },
    [completeAllTodo]: state => {
      const isAllCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !isAllCompleted }));
    },

    [removeCompleteTodo]: state => state.filter(todo => !todo.completed)
  },
  initState
);
