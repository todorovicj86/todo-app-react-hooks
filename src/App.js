import React from 'react';
import TodoApp from './TodoApp'
import { TodoProvider } from './contexts/TodoContext'
// import './App.css';

function App() {
  return (
    <TodoProvider>
        <TodoApp />
    </TodoProvider>
  );
}

export default App;
