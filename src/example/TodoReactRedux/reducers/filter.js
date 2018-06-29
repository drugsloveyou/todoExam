import { FILTER_TODO } from "../constants/ActionTypes";
import { ALL } from "../constants/Filters";

const initState = ALL;
export const filter = (state = initState, action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.filter;
    default:
      return state;
  }
};
