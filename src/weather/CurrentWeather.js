import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let weatherData = {
    city: "Redwood City",
    time: "12:34 AM",
    temperature: 75,
    day: "Sat.",
    date: "6/20/2020",
    description: "Sunny",
    humidity: 5,
    wind: 7,
    weatherIconUrl: "https://via.placeholder.com/275",
    sunriseTime: "5:23 AM",
    sunsetTime: "8:47 PM",
  };
  return (
    <div className="CurrentWeather">
      <div className="card bg-light mb-3 border-dark">
        <p className="last-updated-time">
          <span className="current-day">Last updated: </span>
          <span className="current-day">{weatherData.time}</span>
          <span className="current-day">
            {weatherData.day} {weatherData.date}
          </span>
        </p>
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
            <span className="current-weather">{weatherData.description}</span>
            <span className="current-weather">, </span>
            <span className="current-weather">{weatherData.temperature}</span>
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
            Wind: <span className="current-weather">{weatherData.wind}</span>
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
              <p className="sunrise-time">Sunrise: {weatherData.sunriseTime}</p>
            </div>
            <div className="col-md-6 sunset-time">
              <img
                src="https://via.placeholder.com/150"
                alt="sunset"
                width="150px"
                className="sunset-icon"
              />
              <p className="sunset-time">Sunset: {weatherData.sunsetTime}s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
