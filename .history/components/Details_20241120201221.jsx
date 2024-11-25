import { useLocation } from 'react-router-dom';

export default function CountryDetails() {
  const { state: country } = useLocation(); 

  return (
    <div className='country-info'>
        <p>
        <span><strong>Capital: </strong></span>
        <span>{country.capital}</span>
        </p>
        <p>
        <span><strong>Location in: </strong></span>
        <span className='borders'>{country.subregion}</span>
        </p>
    </div>
  );
}
