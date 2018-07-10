import { filterTodo } from "../actions";
import { ALL } from "../constants/Filters";
import { handleActions } from "redux-actions";
const initState = ALL;

export default handleActions(
  {
    [filterTodo]: (state, action) => action.payload.filter
  },
  initState
);