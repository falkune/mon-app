import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function Todo({todo}) {
  const { dispatch } = useContext(TodoContext);
  return (
    <div>
      <p>{todo.text}</p>
      <span onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>X</span>
    </div>
  )
}
