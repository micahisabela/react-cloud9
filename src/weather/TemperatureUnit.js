import React, { useState } from "react";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("farenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  if (unit === "farenheit") {
    return (
      <div className="TemperatureUnit">
        <span className="current-weather">{Math.round(props.temperature)}</span>
        <span className="current-weather active">°F </span>|{" "}
        <span className="current-weather">
          <a href="#" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsiusTemperature = (props.temperature - 32) * (5 / 9);
    return (
      <div className="TemperatureUnit">
        <span className="current-weather">
          {Math.round(celsiusTemperature)}
        </span>
        <span className="current-weather">
          <a href="#" onClick={showFarenheit}>
            °F{" "}
          </a>
        </span>
        | <span className="current-weather active">°C</span>
      </div>
    );
  }
}
