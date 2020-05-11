import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Users = () => {
  
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  /* Lista todos os users */
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setUsers(response.data);
    })
  }, [])

  return (
    <ol>
      {users.map(user => {
        return (
          <Link to={`/user/${user.id}`}>  
              <li key={user.id} >{user.name}</li>
          </Link> 
        )
      })}
    </ol>
  );
}

export default Users;