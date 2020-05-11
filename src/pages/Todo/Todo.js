import React, {useState, useEffect} from 'react';

import {useRouteMatch} from 'react-router-dom';

import axios from 'axios';

const Todo = props => {
  
  const [todo, setTodo] = useState('');

  const { params } = useRouteMatch();

  /* Lista todos os TODOS */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    .then(response => {
      setTodo(response.data);
    })
  }, [])

  return (
    <> 
      <h2>{todo.title}</h2>
      <h2>{todo.completed}</h2>
    </>
  );
}

export default Todo;