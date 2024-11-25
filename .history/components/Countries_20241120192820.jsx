import '../src/App.css'
import { useEffect, useState } from 'react'
import React from 'react';


function Countries({ countries }) {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle'); 
  
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

  let filteredCountries = [...countries];

    return (
      <div className='outer-container'>

      <div className='countries'>
        <h1>World kingdoms</h1>
        <select id="countries">
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
      </div>

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
  