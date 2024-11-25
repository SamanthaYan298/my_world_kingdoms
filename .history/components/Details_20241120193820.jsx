import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Details() {
    const { state } = useLocation();
    const countryData = state ? state.data : null;

  if (!countryData) {
    return <p>No country data found</p>;
  }

  return (
    <div>
        
    </div>
  )
}