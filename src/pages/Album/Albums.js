import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

const Albums = () => {
  
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState('');

  /* Lista todos os albums */
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then(response => {
      setAlbums(response.data);
    })
  }, [])

  return (
    <ol>
      {albums.map(album => {
        return (
          <Link to={`/album/${album.id}`}>  
              <li key={album.id} >{album.title}</li>
          </Link> 
        )
      })}
    </ol>
  );
}

export default Albums;