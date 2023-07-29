


// Movie Instance Configuration

import { movieInstance } from "./axiosInstances"


export const axiosCreateMovie = async (movieData) => {

  const response = await movieInstance.post('/movies', movieData);

  console.log(response);

}

export const axiosGetMovies = async () => {

  const { data } = await movieInstance.get('/movies');

  console.log(data);

}

export const axiosGetMovie = async (movieId) => {

  const { data } = await movieInstance.get(`/movies/${movieId}`);

  console.log(data);

}

export const updateMovie = async (movieId, movieData) => {

}

export const deleteMovie = async (movieId) => {

}





