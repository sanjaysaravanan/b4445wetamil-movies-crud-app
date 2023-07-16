import React, { useEffect, useState } from "react";
import { getMovies } from "../movieCrud";
import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  }



  useEffect(() => {
    loadMovies();
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', }} >
      {movies.map((movie) => (
        <div key={movie.id} style={{ margin: 10, border: '1px solid' }}>
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{ height: '200px', width: '150px' }}
            />
            <div style={{ padding: 4 }}>

              <h3>{movie.title}</h3>
              <p>Category: {movie.category}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;