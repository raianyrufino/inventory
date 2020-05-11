import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Todos = () => {
  
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  /* Lista todos os TODOS */
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      setTodos(response.data);
    })
  }, [])

  return (
  <ol>
    {todos.map(todo => {
      return (
        <Link to={`/todo/${todo.id}`}>  
            <li key={todo.id} >{todo.title}</li>
        </Link> 
      )
    })}
  </ol>);
}

export default Todos;