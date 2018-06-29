import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODO,
  REMOVE_COMPLETED_TODO
} from "../constants/ActionTypes";
import TodoItemBean from "../bean/TodoItem";

const initState = [new TodoItemBean("Init Redux.")];

export const todos = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(new TodoItemBean(action.text));

    case EDIT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      );

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL_TODO:
      const isAllCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !isAllCompleted }));

    case REMOVE_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);

    default:
      return state;
  }
};
