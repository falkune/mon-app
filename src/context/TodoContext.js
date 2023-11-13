// TodoContext.js
import React, { createContext, useReducer } from 'react';

// Créez le contexte
const TodoContext = createContext();

// Créez le fournisseur du contexte
const TodoProvider = ({ children }) => {
  // Définissez l'état initial de la ToDoList
  const initialState = {
    todos: [],
  };

  // Définissez le reducer pour gérer les actions
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };

  // Utilisez le hook useReducer pour gérer l'état avec le reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Retournez le contexte avec le state et la fonction de dispatch
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
