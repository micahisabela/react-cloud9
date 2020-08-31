import React from "react";

export default function SunriseSunset(props) {
  let sunrise = new Date(props.sunrise * 1000);
  let sunriseTime = sunrise.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  let sunset = new Date(props.sunset * 1000);
  let sunsetTime = sunset.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="SunriseSunset">
      <div className="row rise-set">
        <div className="col-md-6 sunrise-time">
          <img
            src={props.weatherIconUrl}
            alt="sunset"
            width="150px"
            className="sunrise-icon"
          />
          <p className="sunrise-time">
            Sunrise:
            <br /> {sunriseTime}
          </p>
        </div>
        <div className="col-md-6 sunset-time">
          <img
            src="https://via.placeholder.com/150"
            alt="sunset"
            width="150px"
            className="sunset-icon"
          />
          <p className="sunset-time">
            Sunset:
            <br /> {sunsetTime}
          </p>
        </div>
      </div>
    </div>
  );
}
