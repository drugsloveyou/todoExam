import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { deleteTodo, editTodo, completeTodo } from "../actions";
import { getFilteTodos } from "../selectors/index";

const mapStateToProps = state => ({
  todos: getFilteTodos(state)
});

const mapDispatchToProps = { deleteTodo, editTodo, completeTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
