import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import styles from "../styles/WeatherApp.module.css";

import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

export default function WeatherApp() {
  const [location, setLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  function getForecast() {
    axios
      .get("https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester")
      .then((res) => {
        const { location: l, forecasts: f } = res.data;
        setLocation(l);
        setForecasts(f);
        setSelectedDate(f[0].date);
      });
  }

  useEffect(() => {
    getForecast();
  }, []);

  return (
    <div className={styles["weather-app"]}>
      {Object.keys(location).length && (
        <LocationDetails city={location.city} country={location.country} />
      )}

      {forecasts.length && (
        <ForecastSummaries
          forecasts={forecasts}
          handleForecastSelect={handleForecastSelect}
        />
      )}
      {selectedForecast && <ForecastDetails {...selectedForecast} />}
    </div>
  );
}
