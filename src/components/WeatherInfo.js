import "./WeatherInfo.css";

const WeatherInfo = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-info">
      <h1>
        {data.name}, {data.sys.country}
      </h1>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
      <p>{data.main.temp}°C</p>
      <p>Wind: {data.wind.speed} km/h</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Feels like: {data.main.feels_like}°C</p>
    </div>
  );
};

export default WeatherInfo;
