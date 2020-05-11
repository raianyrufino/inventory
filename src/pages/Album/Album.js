import React, {useState, useEffect} from 'react';

import {useRouteMatch } from 'react-router-dom';

import axios from 'axios';

const Album = props => {
  
  const [album, setAlbum] = useState('');
  const [photos, setPhotos] = useState([]);
  const [verPhotos, setVerPhotos] = useState(false);

  const { params } = useRouteMatch();

  /* Lista album pelo id */
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
    .then(response => {  
      setAlbum(response.data);
    })
  }, [])

  useEffect(() => {
    if(verPhotos){
        axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
        .then(response => {
        setPhotos(response.data);
        }) 
    }
  }, [verPhotos])
    
  return (
    <> 
      <h2>{album.title}</h2>
      <button onClick = {() => setVerPhotos(true)}>Ver photos</button>
      
      <ol>
      {photos.map(photo => {
       return(
          <li>
          <br/>{photo.title}
          <br/>{photo.url}
          <br/>{photo.thumbnailUrl}
          </li>
       )
      })}
      </ol>
    </>
  );
}

export default Album;