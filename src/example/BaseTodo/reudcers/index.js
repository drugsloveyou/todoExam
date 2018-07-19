import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";

export default combineReducers({
  filter,
  todos
});
