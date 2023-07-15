import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

const CityMovies = () => {

  const { cityName } = useParams();

  const [searchParams] = useSearchParams();

  console.log(searchParams);
  console.log(searchParams.get('day'));
  console.log(searchParams.get('page'));

  return <h1>Showing {cityName} Movies</h1>
}

export default CityMovies;