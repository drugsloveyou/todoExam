import { connect } from "react-redux";
import Header from "../components/Header";
import { addTodo } from "../actions";

const mapStateToProps = (state, ownProps) => ({});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   addTodo: text => dispatch(addTodo(text))
// });

const mapDispatchToProps = { addTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
