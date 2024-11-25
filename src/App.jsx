import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from '../components/Countries';
import Details from '../components/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:cca2" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
