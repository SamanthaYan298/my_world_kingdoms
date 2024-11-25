import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css'

export default function Details() {
    const { state } = useLocation();
    const countryData = state ? state.data : null;

  if (!countryData) {
    return <p>No country data found</p>;
  }

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
          <option value="BH">Bahrain</option>
          <option value="BE">Belgium</option>
          <option value="ES">Spain</option>
          <option value="KH">Cambodia</option>
          <option value="GB">United Kingdom</option>
          <option value="TH">Thailand</option>
        </select>
      </div>
    </>
  )
}