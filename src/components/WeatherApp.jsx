import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/WeatherApp.module.css";
import getForecast from "../helpers/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import ErrorMessage from "./ErrorMessage";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const acknowledgeError = useCallback(() => {
    setErrorMessage("");
    setCity("");
  }, []);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  const submitCitySearch = () => {
    getForecast({
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrorMessage,
      city,
    });
  };

  useEffect(() => {
    getForecast({
      setLocation,
      setForecasts,
      setSelectedDate,
      setErrorMessage,
      city: "",
    });
  }, []);

  return (
    <div className={styles["weather-app"]}>
      <div className={styles["weather-app__header"]}>
        {!errorMessage && (
          <SearchForm
            handleChange={updateCity}
            handleSubmit={submitCitySearch}
            searchText={city}
            placeholder="Enter city name"
          />
        )}
        {errorMessage && (
          <ErrorMessage
            errorMessage={errorMessage}
            handleClick={acknowledgeError}
          />
        )}

        {!errorMessage && !!Object.keys(location).length && (
          <LocationDetails {...location} errorMessage={errorMessage} />
        )}
      </div>

      {!errorMessage && !!forecasts.length && selectedForecast && (
        <>
          <ForecastDetails {...selectedForecast} />
          <ForecastSummaries
            forecasts={forecasts}
            handleForecastSelect={handleForecastSelect}
            selectedDate={selectedDate}
          />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
