import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { deleteTodo, editTodo, completeTodo } from "../actions";
import { ALL, ACTIVE, COMPLETED } from "../constants/Filters";

function filtTodos(todos = [], filter = ALL) {
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

const mapStateToProps = (state) => ({
  todos: filtTodos(state.todos, state.filter)
});

const mapDispatchToProps = { deleteTodo, editTodo, completeTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
