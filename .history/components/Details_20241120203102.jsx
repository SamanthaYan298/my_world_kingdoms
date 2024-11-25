import { useLocation } from 'react-router-dom';

export default function Details() { 

    const { state: country } = useLocation();

    return (
    <div className='cards-container'>
        <h1>{country.name.official}</h1>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        <h4 className='name'>{country.name.common}</h4>
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
    </div>
    );
}
