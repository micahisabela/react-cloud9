import React from "react";
import FormattedDate from "./FormattedDate";
import SunriseSunset from "./SunriseSunset";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="card bg-light mb-3 border-dark">
        <FormattedDate date={props.data.date} />
        <h1 className="card-title">
          Currently in <br />
          <span className="city">{props.data.city}</span>
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
              {props.data.description}
            </span>
            <span className="current-weather">, </span>
            <span className="current-weather">
              {Math.round(props.data.temperature)}
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
            <span className="current-weather">{props.data.humidity}</span>
            <span className="current-weather">%</span>
            <br />
            Wind:{" "}
            <span className="current-weather">
              {Math.round(props.data.wind)}
            </span>
            <span className="current-weather"> mph</span>
          </p>
          <br />
          <SunriseSunset
            sunrise={props.data.sunriseTime}
            sunset={props.data.sunsetTime}
            weatherIconUrl={props.data.weatherIconUrl}
          />
        </div>
      </div>
    </div>
  );
}
