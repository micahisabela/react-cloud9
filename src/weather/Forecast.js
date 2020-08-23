import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="icon-temp">
        <p className="forecast-weather">
          4:30am
          <img
            src="https://via.placeholder.com/70"
            alt="sunny"
            className="forecast-icon"
          />
          Sunny, 75°F | <em>24°C</em>
        </p>
      </div>
    </div>
  );
}
