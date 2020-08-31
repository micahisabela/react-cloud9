import React from "react";

export default function FormattedDate(props) {
  let today = new Date(props.date * 1000);
  let daysOfWeek = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
  let currentWeekday = daysOfWeek[today.getDay()];
  let currentMonth = today.getMonth() + 1;
  let currentDayNumber = today.getDate();
  let currentYear = today.getFullYear();
  let time = today.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="FormattedDate">
      <p className="last-updated-time">
        <span className="current-day">Last updated: </span>
        <span className="current-day">
          {time} {currentWeekday} {currentMonth}/{currentDayNumber}/
          {currentYear}
        </span>
      </p>
    </div>
  );
}
