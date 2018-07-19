import { createSelector } from "reselect";
import { ALL, ACTIVE, COMPLETED } from "../constants/Filters";

const todosSelector = state => state.todos;
const filterSelector = state => state.filter;
export const getUnCompleteTodo = createSelector(todosSelector, todos =>
  todos.reduce((count, todo) => (!todo.completed ? count + 1 : count), 0)
);

export const filterTodo = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case ALL:
        return todos;
      case ACTIVE:
        return todos.filter(todo => !todo.completed);
      case COMPLETED:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);
