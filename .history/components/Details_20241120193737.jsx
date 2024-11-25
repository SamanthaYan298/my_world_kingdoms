import React from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();
  const countryData = state ? state.data : null;

  if (!countryData) {
    return <p>No country data found</p>;
  }

  return (
    <div>
      <h1>Country Details: {countryData.name.common}</h1>
      <p><strong>Official Name: </strong>{countryData.name.official}</p>
      <p><strong>Region: </strong>{countryData.region}</p>
      <p><strong>Subregion: </strong>{countryData.subregion}</p>
      <p><strong>Capital: </strong>{countryData.capital ? countryData.capital[0] : 'N/A'}</p>
      <p><strong>Population: </strong>{countryData.population}</p>
      <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} width="200" />
    </div>
  );
}

export default Details;
