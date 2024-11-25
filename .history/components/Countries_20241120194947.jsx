import '../src/App.css'
import { useEffect, useState, useNavigate } from 'react'
import React from 'react';


function Countries() {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle'); 
  const navigate = useNavigate();
  
  // load data on mount - only load once
  useEffect(() => {
    const url = ` https://restcountries.com/v3.1/name/kingdom`;

    async function fetchData() {
      let response, data;
      try{
        setFetchStatus('loading');
        response = await fetch(url);
        data = await response.json();
        setCountries(data);
        setFetchStatus('idle');
      } catch(e) {
        setFetchStatus('error');
        console.error(e.message);
      }
    }

    fetchData();

  }, [query]);

  
  const handleCountrySelect = (cca2) => {
    const selectedCountry = countries.find(country => country.cca2 === cca2);
    navigate(`/countries/${cca2}`, { state: selectedCountry });
  };
  

    return (
      <div className='outer-container'>
        {countries.map((country, index) => (
            <div key={index} className='cards-container'>
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
          ))}
      </div>
    );
  }
  
  export default Countries;
  