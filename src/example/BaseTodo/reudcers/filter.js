import { handleActions } from "redux-actions";
import { filterTodo } from "../actions";
import { ALL } from "../constants/Filters";

const initState = ALL;
export default handleActions(
  {
    [filterTodo]: (state, action) => action.payload.filter
  },
  initState
);
