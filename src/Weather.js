import React, { useState } from "react";
import axios from "axios";

import Search from "./Search";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Kyiv");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function weatherOfCity(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      name: response.data.name,
      country: response.data.sys.country,
      day: "Monday 10:00",
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      maxTemp: Math.round(response.data.main.temp_max),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  const apiKey = "7aec51ba2bbd8ce99d79cfa13f7ae381";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(weatherOfCity);

  return (
    <div className="content">
      <h1>Weather forecast</h1>
      <div className="searching-city">
        {weatherData.name}, {weatherData.country}
      </div>
      <div className="card-body">
        <Search />
        <div className="container week-forecast">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="actual-city col-md-3 text-center">
                <div>{weatherData.day}</div>
                <div className="weather-description">
                  {weatherData.description}
                </div>
                <div className="temp-max">
                  Max temperature: {weatherData.maxTemp}°C
                </div>
              </div>
              <div className="temperature-in-the-city col-md-3">
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
              <div className="another-forecast col-md-3 text-center">
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
