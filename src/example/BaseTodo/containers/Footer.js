import { connect } from "react-redux";
import Footer from "../components/Footer";
import { filterTodo, removeCompleteTodo } from "../actions";
import { getUnCompleteTodo } from "../selectors";

const mapStateToProps = (state, ownProps) => ({
  unCompletedTodo: getUnCompleteTodo(state),
  filter: state.filter,
  todoCount: state.todos.length
});

const mapDispatchToProps = { filterTodo, removeCompleteTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
