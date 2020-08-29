import React from "react";

export default function FormattedDate(props) {
  return (
    <div className="FormattedDate">
      <p className="last-updated-time">
        <span className="current-day">Last updated: </span>
        <span className="current-day">{props}</span>
        {/* <span className="current-day">
        {props} {props}
      </span> */}
      </p>
    </div>
  );
}
