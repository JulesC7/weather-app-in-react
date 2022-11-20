import React, { useState } from "react";

export default function WeatherTemperatureCelsius(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="actual-temp">{props.celsius}</span>
        <span className="celsius-fahrenheit col-1">
          <sup>
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </sup>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="WeatherTemperature">
        <span className="actual-temp">{fahrenheit}</span>
        <span className="celsius-fahrenheit col-1">
          <sup>
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </sup>
        </span>
      </div>
    );
  }
}
