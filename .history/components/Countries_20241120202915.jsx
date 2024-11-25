import '../src/App.css'
import { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Details from './Details';


export default function Countries() {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle'); 
  const navigate = useNavigate();
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
    navigate(`/countries/${cca2}`, { state: selectedCountry });
  };
  

    return (
      <div className='countries'>
       <h1>World kingdoms</h1>
        <div className='outer-container'>
          <select id="countries" onChange={(e) => handleCountryClick(e.target.value)}>
            <option>Select a country</option>
            <option value="NO">Norway</option>
            <option value="TO">Tonga</option>
            <option value="LS">Lesotho</option>
            <option value="SE">Sweden</option>
            <option value="SZ">Eswatini</option>
            <option value="MA">Morocco</option>
            <option value="BT">Bhutan</option>
            <option value="JO">Jordan</option>
            <option value="NL">Netherlands</option>
            <option value="SA">Saudi Arabia</option>
            <option value="DK">Denmark</option>
            <option value="BH">Bahrain</option>
            <option value="BE">Belgium</option>
            <option value="ES">Spain</option>
            <option value="KH">Cambodia</option>
            <option value="GB">United Kingdom</option>
            <option value="TH">Thailand</option>
          </select>
          {name && <h1>{country.name}</h1>}
          {countries.map(details => (
              <details.map(details => (<Details key={country.id} details={country} />))
            ))}
        </div>
      </div>
    );
  }

  