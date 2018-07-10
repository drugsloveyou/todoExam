import { ALL, ACTIVE, COMPLETED } from "../constants/Filters";

export function getUnCompleteTodo(todos = []) {
  return todos.reduce((count, todo) => (todo.completed ? count : count + 1), 0);
}

export function filterTodo(todos = [], filter) {
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
