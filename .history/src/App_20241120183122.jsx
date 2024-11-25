import { useEffect, useState } from 'react'
import './App.css'
import Countries from '../components/Countries';

function App() {

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
    <>
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
        <option value="DK">Denmark</option>
        <option value="DK">Denmark</option>
        <option value="DK">Denmark</option>
      </select>
      <Countries countries={filteredCountries} />
    </div>

    </>
  )
}

export default App
