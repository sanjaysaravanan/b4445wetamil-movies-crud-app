import React, { useEffect, useState } from "react";
import { deleteMovie, getMovies } from "../movieCrud";
import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const response = await getMovies();
    setMovies(response);
  }

  const removeFromUi = async (movieId) => {
    await deleteMovie(movieId);
    const newMovies = movies.filter(({ id }) => movieId !== id);
    setMovies(newMovies);
  }

  useEffect(() => {
    loadMovies();
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', }} >
      {movies.map((movie) => (
        <div key={movie.id} style={{ margin: 10, border: '1px solid', position: 'relative' }}>
          <Link to={`/movies/edit?id=${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <i
              className="fa-solid fa-pen-to-square fa-2x"
              style={{
                color: "#fff",
                position: 'absolute',
                top: 5,
                right: 5,
              }}
            ></i>
          </Link>
          <i className="fa-solid fa-trash-can fa-2x" style={{
            color: "#fff",
            position: 'absolute',
            top: 50,
            right: 10,
            cursor: 'pointer',
          }}
            onClick={() => removeFromUi(movie.id)}
          ></i>
          <img
            src={movie.image}
            alt={movie.title}
            style={{ height: '250px', width: '200px' }}
          />
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
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