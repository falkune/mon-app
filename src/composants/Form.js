import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function Form() {
    const [text, setText] = useState('');
    const { dispatch } = useContext(TodoContext);
  
    const addTodo = () => {
      const newTodo = {
        id: Date.now(),
        text,
      };
  
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      setText('');
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addTodo}>Ajouter</button>
      </div>
    );
}