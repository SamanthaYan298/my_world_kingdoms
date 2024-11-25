import '../src/App.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle');
  const navigate = useNavigate();

  // Load data on mount - only load once
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/kingdom`; // This can be updated to get all countries if needed

    async function fetchData() {
      let response, data;
      try {
        setFetchStatus('loading');
        response = await fetch(url);
        data = await response.json();
        setCountries(data);
        setFetchStatus('idle');
      } catch (e) {
        setFetchStatus('error');
        console.error(e.message);
      }
    }

    fetchData();
  }, []);

  const handleCountryClick = (cca2) => {
    const selectedCountry = countries.find(country => country.cca2 === cca2);
    navigate(`/countries/${cca2}`, { state: selectedCountry });
  };

  return (
    <div className='countries'>
      <h1>World Kingdoms</h1>
      <div className='outer-container'>
        <select id="countries" onChange={(e) => handleCountryClick(e.target.value)}>
          <option>Select a country</option>
          {countries.map(country => (
            <option key={country.cca2} value={country.cca2}>{country.name.common}</option>
          ))}
        </select>
      </div>
    </div>
  );
}