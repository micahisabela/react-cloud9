import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [weatherData, setWeatherData] = useState({});

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
      sunriseTime: "5:23 AM",
      sunsetTime: "8:47 PM",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="card bg-light mb-3 border-dark">
          <FormattedDate date={weatherData.date} />
          <h1 className="card-title">
            Currently in <br />
            <span className="city">{weatherData.city}</span>
          </h1>
          <p>
            <img
              src="https://via.placeholder.com/275"
              alt="Current Weather Icon"
              className="current-icon"
            />
          </p>
          <p />
          <div className="card-body">
            <p className="card-text">
              <span className="current-weather text-capitalize">
                {weatherData.description}
              </span>
              <span className="current-weather">, </span>
              <span className="current-weather">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="current-weather">
                <a href="#" className="active">
                  °F{" "}
                </a>
              </span>
              |
              <span className="current-weather">
                <a href="#">°C</a>
              </span>
              <br />
              Humidity:{" "}
              <span className="current-weather">{weatherData.humidity}</span>
              <span className="current-weather">%</span>
              <br />
              Wind:{" "}
              <span className="current-weather">
                {Math.round(weatherData.wind)}
              </span>
              <span className="current-weather"> mph</span>
            </p>
            <br />
            <div className="row rise-set">
              <div className="col-md-6 sunrise-time">
                <img
                  src={weatherData.weatherIconUrl}
                  alt="sunset"
                  width="150px"
                  className="sunrise-icon"
                />
                <p className="sunrise-time">
                  Sunrise:
                  <br /> {weatherData.sunriseTime}
                </p>
              </div>
              <div className="col-md-6 sunset-time">
                <img
                  src="https://via.placeholder.com/150"
                  alt="sunset"
                  width="150px"
                  className="sunset-icon"
                />
                <p className="sunset-time">
                  Sunset:
                  <br /> {weatherData.sunsetTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "imperial";
    let apiKey = "ae34e38ff098831b63cd4c4969e133cd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(getWeatherData);

    return <h1>Loading...</h1>;
  }
}
