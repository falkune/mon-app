import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './composants/Home';
import Login from './composants/Login';
import Register from './composants/Register';
import Todo from './composants/Todo';
import TodoList from './composants/TodoList';
import Form from './composants/Form';
import { TodoProvider } from './context/TodoContext';
// import TodoContext from './context/TodoContext';

function App() {

  // declarer le state globale
  const [todoList, setTodoList] = useState([]);
  // const todoList = useContext(TodoContext);
  // fonction pour ajouter une todo
  const addTodo = todo => {
    setTodoList([...todoList, { id: Date.now(), val: todo }]);
  }

  // fonction pour supprimer une todo
  const removeTodo = id => {
    // ecrire le code qui permer de supprimer une todo via son id
    // utiliser la methode filter de js
    // console.log(id);
    setTodoList(todoList.filter(todo => todo.id !== id));
  }
  return (
    <TodoProvider>
      <Form add={addTodo} />
      <TodoList listTodo={todoList} remove={removeTodo} />
    </TodoProvider>
  );
}

export default App;
