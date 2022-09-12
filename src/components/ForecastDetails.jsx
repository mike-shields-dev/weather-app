import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastDetails.module.css";
import FormattedDate from "./FormattedDate";
import WindDirectionIcon from "./WindDirectionIcon";

export default function ForecastDetails({ date, temperature, humidity, wind }) {
  return (
    <div className={styles["forecast-details"]} data-testid="forecast-details">
      <h2
        className={styles["forecast-details__date"]}
        data-testid="forecast-details-date"
      >
        <FormattedDate date={date} />
      </h2>
      <p
        className={styles["forecast-details__temperature-max"]}
        data-testid="forecast-details-temperature-max"
      >
        Max Temperature: <span>{temperature.max}</span> °C
      </p>
      <p
        className="forecast-details__temperature-min"
        data-testid="forecast-details-temperature-min"
      >
        Min Temperature: <span>{temperature.min}</span> °C
      </p>
      <p
        className="forecast-details__humidity"
        data-testid="forecast-details-humidity"
      >
        Humidity: <span>{humidity}</span>%
      </p>
      <p
        className={styles["forecast-details__wind"]}
        data-testid="forecast-details-wind"
      >
        <span>{wind.speed}</span>mph{" "}
        <WindDirectionIcon direction={wind.direction} />
      </p>
    </div>
  );
}

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
  humidity: PropTypes.number.isRequired,
};
