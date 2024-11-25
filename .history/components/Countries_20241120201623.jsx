import '../src/App.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  // Load data once
  useEffect(() => {
    async function fetchData() {
      const url = `https://restcountries.com/v3.1/all`;  // Update to load all countries
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
      } catch (e) {
        console.error(e.message);
      }
    }

    fetchData();
  }, []);

  const handleCountryClick = (cca2) => {
    // Navigate to the details page, passing the country data as state
    const selectedCountry = countries.find(country => country.cca2 === cca2);
    navigate(`/countries/${cca2}`, { state: selectedCountry });
  };

  return (
    <div className="countries">
      <h1>World Kingdoms</h1>
      <div className="country-list">
        {countries.map((country) => (
          <div key={country.cca2} className="country-item" onClick={() => handleCountryClick(country.cca2)}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;
