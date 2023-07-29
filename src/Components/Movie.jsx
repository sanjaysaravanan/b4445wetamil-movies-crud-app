/**
 * Component that describes a movie
 * Trailer, Title, Category
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getMovie } from '../movieCrud';
import { axiosGetMovie } from '../axiosMovieCrud';



const Movie = () => {

  const { movieId } = useParams();

  const [movieData, setData] = useState({
    title: '',
    category: '',
    image: '',
    trailer: '',
  });

  const loadMovie = async () => {
    const response = await getMovie(movieId);
    setData(response);
  }

  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div
      style={{ padding: 10 }}
    >
      <iframe
        title={movieData.title}
        src={`https://www.youtube.com/embed/${movieData.trailer}`}
        style={{
          width: '100%',
          height: '600px',
        }}
      >
      </iframe>
      <h2>{movieData.title}</h2>
      <h3>{movieData.category}</h3>
      <button onClick={() => axiosGetMovie(movieId)} >Get Details</button>
    </div>
  )
}

export default Movie;