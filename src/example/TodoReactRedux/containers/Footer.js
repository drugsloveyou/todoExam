import { connect } from "react-redux";
import Footer from "../components/Footer";
import { filterTodo, removeCompleteTodo } from "../actions";
import { getUnCompletedCount } from "../selectors/index";

const mapStateToProps = state => ({
  unCompletedCount: getUnCompletedCount(state),
  todoCount: state.todos.length,
  filter: state.filter
});

const mapDispatchToProps = { filterTodo, removeCompleteTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
