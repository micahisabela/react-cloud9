import React, { useState } from "react";
import WeatherData from "./WeatherData";
import ForecastHeader from "./ForecastHeader";
import Forecast from "./Forecast";

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
      weatherIconCode: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="Search">
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
        <div className="row">
          <div className="col-md-6">
            <WeatherData data={weatherData} />
          </div>
          <div className="col-md-6">
            <ForecastHeader />
            <Forecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return <h1>Loading...</h1>;
  }
}
