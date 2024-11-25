import '../src/App.css'
import { useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import Details from './Details';


export default function Countries() {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle'); 
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { state: name } = useLocation();
  
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


  const handleCountryClick = (cca2) => {
    const selectedCountry = countries.find(country => country.cca2 === cca2);
    setSelectedCountry(selectedCountry);
  };
  

    return (
      <div className='countries'>
       <h1>World kingdoms</h1>
        <div className='outer-container'>
          <select id="countries" onChange={(e) => handleCountryClick(e.target.value)}>
            <option>Select a country</option>
            {countries.map(country => (
              <option key={country.cca2} value={country.cca2}>{country.name.common}</option>
            ))}
          </select>
          {name && <h1>{country.name}</h1>}
        </div>
      </div>
    );
  }

  