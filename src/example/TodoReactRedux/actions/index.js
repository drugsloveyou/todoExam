import * as types from "../constants/ActionTypes";

export const addTodo = text => ({
  type: types.ADD_TODO,
  text
});

export const editTodo = (id, text) => ({
  type: types.EDIT_TODO,
  id,
  text
});

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
});

export const completeAllTodo = () => ({
  type: types.COMPLETE_ALL_TODO
});

export const removeCompleteTodo = () => ({
  type: types.REMOVE_COMPLETED_TODO
});

export const filterTodo = filter => ({
  type: types.FILTER_TODO,
  filter
});
