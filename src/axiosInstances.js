import { moviesUrl } from "./Config";
import axios from 'axios';

// Movie Instance
const movieInstance = axios.create({
  baseURL: moviesUrl,
  timeout: 1000,
  headers: { 'batchName': 'B4445WETAMIL' }, // request headers
});


movieInstance.interceptors.request.use(function (config) {

  return { ...config };
}, function (err) {
  console.log(err);
});

movieInstance.interceptors.response.use(function (response) {
  console.log(response);
  return response;
}, function (err) {
  console.log(err);
});


export {
  movieInstance
}