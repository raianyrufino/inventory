import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

// (func,  ) = o efeito ocorre com qualquer alteração no site 
// (func, []) = o efeito só ocorre quando a page inicia
// (func, [var, ...]) = este efeito sempre será chamado quando alguma variavel de dependencia for alterada 

const Posts = () => {
  
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');

  /* Lista todos os posts */
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      setPosts(response.data);
    })
  }, [])

  return (
    <ol>
      {posts.map(post => {
        return (
          <Link to={`/post/${post.id}`}>  
              <li key={post.id} >{post.title}</li>
          </Link> 
        )
      })}
    </ol>
  );
}

export default Posts;