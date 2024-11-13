import React, { useState } from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import Weather from './Weather';

function HomePage() {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <div className="App">
     
      <Counter />
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      <Weather city={searchCity} />
    </div>
  );
}

export default HomePage;
