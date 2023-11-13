import React, { useContext } from 'react';
import Todo from './Todo';
import { TodoContext } from '../context/TodoContext';

export default function TodoList() {
  const { state } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </div>
  )
}
