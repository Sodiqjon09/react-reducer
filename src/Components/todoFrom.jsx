import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/Todoactions";

const TodoForm = () => {
  const [todoText, settodoText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      settodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" value={todoText} onChange={(e) => settodoText(e.target.value)} placeholder="enter new task" />
      <button type="submit">addTodo</button>
    </form>
  );
};

export default TodoForm;