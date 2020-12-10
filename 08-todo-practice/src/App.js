import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [ todos, setTodos ] = useState([])
  const todoNameRef = useRef() 
  
  function handleAddTodo() {
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, { id: Math.floor(Math.random() * 100), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  return (
    <>
    {/* <TodoList todos= Es un atibuto que se a conertir en la prop del TodoList.js (los nombres deben ser iguales)
    {todos} /> */}
      <TodoList todos={todos} />
      <input ref={ todoNameRef } type="text" />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear completed todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
