import { useEffect, useState } from 'react'
import './App.css'
import Countries from '../components/Countries';

function App() {
  
  // load data on mount - only load once
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/all`;

    async function fetchData() {
      let response, data;
      try{
        setFetchStatus('loading');

        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        })
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


  return (
    <>
      <h1>Countries of the World</h1>
    
      <Countries countries={filteredCountries} />
    </>
  )
}

export default App
