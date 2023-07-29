import axios from 'axios';


async function getCountries() {
  const { data: countries } = await axios.get('https://restcountries.com/v3.1/all');
  console.log(countries);
}

export {
  getCountries
}