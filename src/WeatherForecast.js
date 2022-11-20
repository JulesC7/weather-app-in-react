import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function weekWeatherForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container short-week-forecast">
        <div className="row d-flex justify-content-center">
          {forecast.daily.map(function (dayForecast, index) {
            if (index < 7) {
              return (
                <div className="week-weather col-md-1" key={index}>
                  <WeatherForecastDay day={dayForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "7aec51ba2bbd8ce99d79cfa13f7ae381";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(weekWeatherForecast);

    return null;
  }
}
