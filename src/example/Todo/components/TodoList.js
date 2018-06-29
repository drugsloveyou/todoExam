import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos = [], deleteTodo, editTodo, completeTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
      />
    ))}
  </ul>
);

export default TodoList;
