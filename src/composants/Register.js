import React, { useContext, useState } from 'react';
import TestContext from '../context/TestContext';

export default function Register() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TestContext);
  return (
    <div>
      <h1>Register</h1>
      <input onChange={e => setTodo(e.target.value)} value={todo}/>
      <button onClick={() => addTodo(todo)}>click moi</button>
    </div>
    
  )
}