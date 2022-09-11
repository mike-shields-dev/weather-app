import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastSummary.module.css";
import WeatherIconComponent from "./WeatherIconComponent";
import FormattedDate from "./FormattedDate";

export default function ForecastSummary({
  date,
  description,
  icon,
  temperature,
  handleForecastSelect,
}) {
  return (
    <div
      className={`${styles["forecast-summary"]} shadow`}
      data-testid="forecast-summary"
    >
      <h2
        className={styles["forecast-summary__date"]}
        data-testid="forecast-summary-date"
      >
        <FormattedDate date={date} />
      </h2>
      <p
        className="forecast-summary__description"
        data-testid="forecast-summary-description"
      >
        {description}
      </p>
      <WeatherIconComponent iconId={icon} />
      <p
        className="forecast-summary__temperature"
        data-testid="forecast-summary-temperature"
      >
        <span>{temperature.max}</span>
        °C
      </p>
      <button
        className="shadow"
        type="button"
        onClick={() => handleForecastSelect(date)}
      >
        More details...
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};
