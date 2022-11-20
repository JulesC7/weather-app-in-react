import React from "react";

export default function WeatherForecastDay(props) {
  function weekDay() {
    let date = new Date(props.day.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="card-body">
      <h6 className="card-title">{weekDay()}</h6>
      <img
        src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}@2x.png`}
        alt={props.day.weather[0].description}
        className="float-right"
        width="64px"
      />
      <h6 className="week-weather-temperature">
        {Math.round(props.day.temp.day)}°C
      </h6>
    </div>
  );
}
