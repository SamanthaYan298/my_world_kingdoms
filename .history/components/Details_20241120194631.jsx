import { useLocation, Link } from 'react-router-dom';

export default function Details() {
  const { state: country } = useLocation();

  return (
    <div className="country-details">
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
    </div>
  );
}
