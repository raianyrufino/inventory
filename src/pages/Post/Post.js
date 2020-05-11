import React, {useState, useEffect} from 'react';

import {useRouteMatch} from 'react-router-dom';

import axios from 'axios';

const Post = props => {
  
  const [post, setPost] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [verComentarios, setVerComentarios] = useState(false);

  const { params } = useRouteMatch();
    
  /* Lista post por id */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(response => {
      setPost(response.data);
    })
  }, [])

  useEffect(() => {
    if(verComentarios){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        .then(response => {
        setComentarios(response.data);
        }) 
    }
  }, [verComentarios])
    

  return (
    <> 
      <h2>{post.title}</h2>
      <h2>{post.body}</h2>
      <button onClick = {() => setVerComentarios(true)}>Ver comentários</button>
      
      <ol>
      {comentarios.map(comentario => {
       return(
          <li>
          <br/>{comentario.name}
          <br/>{comentario.email}
          <br/>{comentario.body}
          </li>
       )
      })}
      </ol>
    </>
  );
}

export default Post;