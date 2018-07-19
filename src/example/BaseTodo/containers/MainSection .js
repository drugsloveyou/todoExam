import { connect } from "react-redux";
import MainSection from "../components/MainSection";
import { completeAllTodo } from "../actions";

const mapStateToProps = (state, ownProps) => ({
  isCompleteAll: state.todos.every(todo => todo.completed),
  todoCount: state.todos.length
});

const mapDispatchToProps = { completeAllTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
