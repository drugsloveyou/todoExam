import * as types from "../constants/ActionTypes";
import { createAction } from "redux-actions";
import http from "../utils/http";
import { ApiAddTodo } from "../constants/Api";

export const addTodo = createAction(types.ADD_TODO, async text => {
  const data = http(ApiAddTodo);
  return {
    ...data,
    text
  };
});

export const editTodo = createAction(types.EDIT_TODO, (id, text) => ({
  id,
  text
}));

export const deleteTodo = createAction(types.DELETE_TODO, id => ({
  id
}));

export const completeTodo = createAction(types.COMPLETE_TODO, id => ({
  id
}));

export const completeAllTodo = createAction(types.COMPLETE_ALL_TODO);

export const removeCompleteTodo = createAction(types.REMOVE_COMPLETED_TODO);

export const filterTodo = createAction(types.FILTER_TODO, filter => ({
  filter
}));
