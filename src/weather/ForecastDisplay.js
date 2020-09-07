import React from "react";
import CurrentWeatherIcon from "./CurrentWeatherIcon";

export default function ForecastDisplay(props) {
  let today = new Date(props.data.dt * 1000);
  let time = today.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  let description = props.data.weather[0].description;
  let farenheitTemp = props.data.main.temp;
  let celsiusTemp = (props.data.main.temp - 32) * (5 / 9);
  let forecastIconCode = props.data.weather[0].icon;

  return (
    <div className="icon-temp">
      <p className="forecast-weather">
        {time}
        <CurrentWeatherIcon code={forecastIconCode} />
        <span className="text-capitalize">{description}</span>,{" "}
        {Math.round(farenheitTemp)}°F | <em>{Math.round(celsiusTemp)}°C</em>
      </p>
    </div>
  );
}
