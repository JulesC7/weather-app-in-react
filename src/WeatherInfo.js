import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function weatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container week-forecast">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="actual-city col-md-3 text-center">
              <div>
                <FormattedDate date={props.data.day} />
              </div>
              <div className="weather-description">
                {props.data.description}
              </div>
              <div className="temp-max">
                Max temperature: {props.data.maxTemp}°C
              </div>
            </div>
            <div className="temperature-in-the-city col-md-3">
              <div className="row middle-block">
                <span className="col-4 p-0 justify-content-end">
                  <img
                    src={props.data.imgUrl}
                    alt={props.data.description}
                    className="float-right"
                  />
                </span>
                <span className="col-8 m-0 p-0">
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>
              </div>
            </div>
            <div className="another-forecast col-md-3 text-center">
              <div className="wind">Wind: {props.data.wind} km/h</div>
              <div className="humidity">Humidity: {props.data.humidity}%</div>
              <div className="feels-like">
                Feels like {props.data.feelsLike}°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
