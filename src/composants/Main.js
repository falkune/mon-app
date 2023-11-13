import React, { useState, useContext } from 'react';
import '../App.css';
import { TestProvider } from '../context/TestContext';
import Register from './Register';

export default function Main() {
    // declarer le state globale
    const [todoList, setTodoList] = useState([]);
    // fonction pour ajouter une todo
    const addTodo = todo => {
        setTodoList([...todoList, {id: Date.now(), val: todo}]);
        console.log(todoList);
    }

    // fonction pour supprimer une todo
    const removeTodo = id => {
        // ecrire le code qui permer de supprimer une todo via son id
        // utiliser la methode filter de js
        console.log("ok")
    }

    return (
        <TestProvider value={{ todoList, addTodo, removeTodo }}>
            <Register/>
        </TestProvider>
    )
}
