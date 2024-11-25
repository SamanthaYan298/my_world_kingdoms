import { useLocation } from 'react-router-dom';

export default function Details() {
  const { state: country } = useLocation();  // Get country data passed via state

  return (
    <div className="country-details">
      <h2>{country.name.official}</h2>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Region:</strong> {country.subregion}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
    </div>
  );
}
