import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./actions/todoActions";

function todoItem() {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${todo.comleted ? "comleted" : ""}`}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
}

export default todoItem;
