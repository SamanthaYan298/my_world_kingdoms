import { useEffect, useState } from 'react'
import './App.css'
import Countries from '../components/Countries';

function App() {

  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [fetchStatus, setFetchStatus] = useState('idle'); 
  
  // load data on mount - only load once
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;

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
      <Countries countries={filteredCountries} />
    </div>

    </>
  )
}

export default App
