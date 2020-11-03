import React, { useEffect, useState } from 'react'
import './App.css';
import InputCity from '../src/components/inputCity'
import WeatherData from '../src/components/displayWeatherData'
require('dotenv').config()

function App() {
  const [weatherData, setWeatherData] = useState({ name: null })
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (location !== null) {
      const apiKey = process.env.REACT_APP_API
      const units = `metric`
      async function getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},GB&units=${units}&appid=${apiKey}`)
        const data = await response.json()
        setWeatherData(data)
      }
      getWeather()
    }
  }, [location])

  console.log(weatherData)

  return (
    <div className="App">
    <h1>UK Weather</h1>
      <div>
        <InputCity setLocation={setLocation} />
        <WeatherData data={weatherData} />
      </div>
    </div>
  );
}

export default App;
