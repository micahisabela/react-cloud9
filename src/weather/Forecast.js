import React, { useState } from "react";
import "./Forecast.css";
import ForecastDisplay from "./ForecastDisplay.js";

import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    console.log(forecast);

    return (
      <div className="Forecast">
        <ForecastDisplay data={forecast.list[0]} />
        <hr />
        <ForecastDisplay data={forecast.list[1]} />
        <hr />
        <ForecastDisplay data={forecast.list[2]} />
        <hr />
        <ForecastDisplay data={forecast.list[3]} />
      </div>
    );
  } else {
    let units = "imperial";
    let apiKey = "ae34e38ff098831b63cd4c4969e133cd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
