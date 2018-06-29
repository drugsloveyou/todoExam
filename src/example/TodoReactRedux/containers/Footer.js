import { connect } from "react-redux";
import Footer from "../components/Footer";
import { filterTodo, removeCompleteTodo } from "../actions";

const mapStateToProps = (state, ownProps) => ({
  unCompletedCount: state.todos.reduce(
    (count, todo) => (!todo.completed ? count + 1 : count),
    0
  ),
  todoCount: state.todos.length,
  filter: state.filter
});

const mapDispatchToProps = { filterTodo, removeCompleteTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
