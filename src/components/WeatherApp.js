import WeatherInfo from "./WeatherInfo";
import "./WeatherApp.css";
import { useState } from "react";
import "../countries.json";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    const APIKEY = "035b5fc519e5190e637e4933d3a70398";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      setWeatherData(data);
      console.log(data);
    } else {
      console.log("Failed to fetch data");
    }
  };

  return (
    <div className="weather-app">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          className="searchbox"
          onChange={handleCityChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          🔍
        </button>
      </div>
      <WeatherInfo data={weatherData} />
    </div>
  );
};

export default WeatherApp;
