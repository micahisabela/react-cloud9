import React from "react";
import "./Forecast.css";
import CurrentWeatherIcon from "./CurrentWeatherIcon";

import axios from "axios";

export default function Forecast(props) {
  let units = "imperial";
  let apiKey = "ae34e38ff098831b63cd4c4969e133cd";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${units}&appid=${apiKey}`;

  function showForecast(response) {
    console.log(response.data);
  }
  axios.get(apiUrl).then(showForecast);

  return (
    <div className="Forecast">
      <div className="icon-temp">
        <p className="forecast-weather">
          4:30am
          {/* <CurrentWeatherIcon code={forecast.list[0].weather[0].icon} /> */}
          Sunny, 75°F | <em>24°C</em>
        </p>
      </div>
    </div>
  );
}
