import React from "react";

import Search from "./Search";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    day: "Monday 10:00",
    description: "Cloud and sun",
    wind: 3,
    maxTemp: 17,
    temperature: 15,
    humidity: 27,
    feelsLike: 15,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };
  return (
    <div className="content">
      <h1>Weather forecast</h1>
      <div className="searching-city" id="searching-city">
        Kyiv, Ukraine
      </div>
      <div className="card-body">
        <Search />
        <div className="container week-forecast">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="actual-city col-md-4 text-center">
                <div>{weatherData.day}</div>
                <div className="weather-description">
                  {weatherData.description}
                </div>
                <div className="temp-max">
                  Max temperature: {weatherData.maxTemp}°C
                </div>
              </div>
              <div className="temperature-in-the-city col-md-4">
                <div className="row middle-block">
                  <span className="input-group-text-svg col-6 d-flex justify-content-end">
                    <img
                      src={weatherData.imgUrl}
                      alt=""
                      className="float-right"
                    />
                  </span>
                  <span className="col-6 d-flex">
                    <span className="actual-temp">
                      {weatherData.temperature}
                    </span>
                    <span className="celsius-fahrenheit col-1">
                      <sup>°C</sup>
                    </span>
                  </span>
                </div>
              </div>
              <div className="another-forecast col-md-4 text-center">
                <div className="wind">Wind: {weatherData.wind} km/h</div>
                <div className="humidity">
                  Humidity: {weatherData.humidity}%
                </div>
                <div className="feels-like">
                  Feels like {weatherData.feelsLike}°C
                </div>
              </div>
            </div>
          </div>
          <div className="container short-week-forecast">
            <div className="row d-flex justify-content-center" id="forecast">
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
              <div className="card week-weather col-sm-1">
                <div className="card-body">
                  <h5 className="card-title">Monday</h5>
                  <h6 className="week-weather-temperature">15°C</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
