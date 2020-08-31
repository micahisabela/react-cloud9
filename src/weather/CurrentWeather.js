import React, { useState } from "react";
import WeatherData from "./WeatherData";
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
      sunriseTime: response.data.sys.sunrise,
      sunsetTime: response.data.sys.sunset,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <WeatherData data={weatherData} />
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
