import React, { useEffect, useState } from 'react';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "74bd5e476debe10c06f1bc43ff9d0805"; // Replace with your actual OpenWeather API key

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      });
  }, [city, apiKey]);  // Re-fetch data whenever the city changes

  if (loading) return <div>Loading...</div>;

  // Check if weather data is valid before rendering
  if (!weatherData || weatherData.cod !== 200) return <div>No data available for "{city}"</div>;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main?.temp}°C</p> {/* Added optional chaining */}
      <p>Weather: {weatherData.weather[0]?.description}</p>
      <p>Humidity: {weatherData.main?.humidity}%</p>
    </div>
  );
};

export default Weather;
