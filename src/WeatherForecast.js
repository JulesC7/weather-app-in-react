import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="container short-week-forecast">
      <div className="row d-flex justify-content-center">
        <div className="card week-weather col-md-1">
          <div className="card-body">
            <h6 className="card-title">Monday</h6>
            <img
              src={props.data.imgUrl}
              alt={props.data.description}
              className="float-right"
              width="64px"
            />
            <h6 className="week-weather-temperature">15°C</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
