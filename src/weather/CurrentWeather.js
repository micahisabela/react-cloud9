import React, { useState } from "react";
import WeatherData from "./WeatherData";
import axios from "axios";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let units = "imperial";
    let apiKey = "ae34e38ff098831b63cd4c4969e133cd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(getWeatherData);
  }

  function getWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      weatherIconUrl: "https://via.placeholder.com/275",
      sunriseTime: response.data.sys.sunrise,
      sunsetTime: response.data.sys.sunset,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="Search">
          <button type="submit" className="btn btn-primary btn-block">
            Current Location
          </button>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={getCity}
              />
            </div>
            <button type="submit" className="btn btn-info btn-block">
              Change city
            </button>
          </form>
        </div>
        <WeatherData data={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return <h1>Loading...</h1>;
  }
}
