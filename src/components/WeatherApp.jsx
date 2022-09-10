import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/WeatherApp.module.css";
import getForecast from "../helpers/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const updateCity = useCallback((event) => {
    setCity(event.target.value);
  }, []);

  const submitCitySearch = useCallback(() => {
    getForecast({
      setLocation,
      setForecasts,
      setSelectedDate,
      city,
    });
  }, [city]);

  useEffect(() => {
    getForecast({
      setLocation,
      setForecasts,
      setSelectedDate,
      city: "Manchester",
    });
  }, [city]);

  return (
    <div className={styles["weather-app"]}>
      <SearchForm
        handleChange={updateCity}
        handleSubmit={submitCitySearch}
        searchText={city}
      />
      {Object.keys(location).length ? <LocationDetails {...location} /> : null}

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
