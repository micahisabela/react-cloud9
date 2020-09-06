import React from "react";

import "./App.css";

import Header from "./Header.js";
import CurrentWeather from "./weather/CurrentWeather";
import Footer from "./Footer";
import ForecastHeader from "./weather/ForecastHeader";
import Forecast from "./weather/Forecast";

function App() {
  return (
    <div className="App">
      <div className="container container-fluid">
        <div className="weather-info">
          <Header />
          <div className="row">
            <div className="col-md-6">
              <CurrentWeather defaultCity="Manila" />
            </div>
            <div className="col-md-6">
              <ForecastHeader />
              <span>
                <Forecast /> <Forecast />
              </span>
              <hr />
              <Forecast />
              <hr />
              <Forecast />
              <hr />
              <Forecast />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
