import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

import "./Weather.css";
import "./Search.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function weatherOfCity(response) {
    console.log(response.data);
    setLoaded(true);
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      day: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      maxTemp: Math.round(response.data.main.temp_max),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  function typeCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  function searchCity() {
    const apiKey = "7aec51ba2bbd8ce99d79cfa13f7ae381";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    axios.get(`${url}&appid=${apiKey}`).then(weatherOfCity);
  }

  if (loaded) {
    return (
      <div className="content">
        <h1>Weather forecast</h1>
        <div className="searching-city">
          {weatherData.city}, {weatherData.country}
        </div>
        <div className="card-body">
          <div className="search-container">
            <div className="search-bar">
              <form className="input-group" onSubmit={handleSubmit}>
                <span className="search-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  type="search"
                  role="combobox"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Enter a city"
                  onChange={typeCity}
                />
                <input
                  type="submit"
                  className="input-group-text"
                  value="Search"
                />
                <button className="current-city input-group-text btn btn-primary">
                  Current city
                </button>
              </form>
            </div>
          </div>

          <WeatherInfo data={weatherData} />

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
    );
  } else {
    searchCity();

    return "Loading...";
  }
}
