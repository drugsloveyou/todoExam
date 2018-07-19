import { createAction } from "redux-actions";
import * as types from "../constants/ActionType";
import http from "../http";
import {
  ApiAddTodo,
  ApiDeleteTodo,
  ApiEditTodo,
  ApiCompleteTodo,
  ApiCompleteAllTodo,
  ApiDeleteCompletedTodo
} from "../constants/Api";

export const addTodo = createAction(types.ADD_TODO, async text => {
  const data = await http(ApiAddTodo);
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
