import React from "react";

import "./App.css";

import Header from "./Header.js";
import CurrentWeather from "./weather/CurrentWeather";
import Footer from "./Footer";
// import ForecastHeader from "./weather/ForecastHeader";
// import Forecast from "./weather/Forecast";

function App() {
  return (
    <div className="App">
      <div className="container container-fluid">
        <div className="weather-info">
          <Header />
          <CurrentWeather defaultCity="Manila" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
