import React from "react";

import "./App.css";

import Header from "./Header.js";
import Search from "./Search";
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
          <Search />
          <div className="row">
            <div className="col-md-6">
              <CurrentWeather />
            </div>
            <div className="col-md-6">
              <ForecastHeader />
              <Forecast />
              <hr />
              <Forecast />
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
