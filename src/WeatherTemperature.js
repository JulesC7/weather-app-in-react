import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="actual-temp">{props.celsius}</span>
      <span className="celsius-fahrenheit col-1">
        <sup>°C</sup>
      </span>
    </div>
  );
}
