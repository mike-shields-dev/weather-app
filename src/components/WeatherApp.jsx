import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/WeatherApp.module.css";
import getForecast from "../helpers/getForecast";
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

  useEffect(() => {
    getForecast().then(({ location: _location, forecasts: _forecasts }) => {
      setLocation(_location);
      setForecasts(_forecasts);
      setSelectedDate(_forecasts[0].date);
    });
  }, []);

  return (
    <div className={styles["weather-app"]}>
      {Object.keys(location).length ? (
        <LocationDetails city={location.city} country={location.country} />
      ) : null}

      {forecasts.length && selectedForecast ? (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            handleForecastSelect={handleForecastSelect}
          />
          <ForecastDetails {...selectedForecast} />
        </>
      ) : null}
    </div>
  );
}
