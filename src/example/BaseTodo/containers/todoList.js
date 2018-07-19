import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { editTodo, completeTodo, deleteTodo } from "../actions";
import { filterTodo } from "../selectors";

const mapStateToProps = state => ({
  todos: filterTodo(state)
});

const mapDispatchToProps = {
  editTodo,
  completeTodo,
  deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
