import './MyApp.css';
import React from 'react';
import TodoList from './components/todoList/todoList';

function MyApp() {

  return (
    <div className='container'>
      <TodoList />
    </div>
  );
}

export default MyApp;
