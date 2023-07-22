import { moviesUrl } from "./Config";


export const createMovie = async (movieData) => {
  const response = await fetch(
    `${moviesUrl}/movies`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movieData)
    }
  );
  const movie = await response.json();
  return movie;
}

export const getMovies = async () => {
  const response = await fetch(
    `${moviesUrl}/movies`
  );
  const movies = await response.json();
  return movies;
}

export const getMovie = async (movieId) => {
  const response = await fetch(
    `${moviesUrl}/movies/${movieId}`
  );
  const movie = await response.json();
  return movie;
}

export const updateMovie = async (movieId, movieData) => {
  const response = await fetch(
    `${moviesUrl}/movies/${movieId}`,
    {
      method: 'PUT',
      body: JSON.stringify(movieData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const movie = await response.json();
  return movie;
}

export const deleteMovie = async (movieId) => {
  const response = await fetch(
    `${moviesUrl}/movies/${movieId}`,
    {
      method: 'DELETE'
    }
  );
  const movie = await response.json();
  return movie;
}





