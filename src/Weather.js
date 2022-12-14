import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

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
      coordinates: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      day: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      maxTemp: Math.round(response.data.main.temp_max),
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
              </form>
            </div>
          </div>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    searchCity();

    return "Loading...";
  }
}
