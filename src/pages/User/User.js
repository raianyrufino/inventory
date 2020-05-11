import React, {useState, useEffect} from 'react';

import {useRouteMatch} from 'react-router-dom';

import axios from 'axios';

const User = props => {
  
  const [user, setUser] = useState(null);

  const { params } = useRouteMatch();
    
  /* Lista user por id */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(response => {
      setUser(response.data);
    })
  }, [])

  return (
    <> 
      {user &&  
      <> 
      <h4>{user.name}</h4>
      <h4>{user.username}</h4>
      <h4>{user.email}</h4>
      <h4>{user.address.street}</h4>
      <h4>{user.address.suite}</h4>
      <h4>{user.address.city}</h4>
      <h4>{user.address.zipcode}</h4>
      <h4>{user.address.geo.lat}</h4>
      <h4>{user.address.geo.lng}</h4>
      <h4>{user.phone}</h4>
      <h4>{user.website}</h4>
      <h4>{user.company.name}</h4> 
      <h4>{user.company.catchPhrase}</h4> 
      <h4>{user.company.bs}</h4> 
      </>
    }
    </>
  );
}

export default User;