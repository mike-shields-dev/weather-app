import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastSummary.module.css";
import WeatherIconComponent from "./WeatherIconComponent";
import FormattedDate from "./FormattedDate";

const ForecastSummary = ({
  date,
  description,
  icon,
  temperature,
  handleForecastSelect,
}) => {
  return (
    <div className={styles["forecast-summary"]} data-testid="forecast-summary">
      <h2
        className={styles["forecast-summary__date"]}
        data-testid="forecast-summary-date"
      >
        <FormattedDate date={date} />
      </h2>
      <p
        className={styles["forecast-summary__description"]}
        data-testid="forecast-summary-description"
      >
        {description}
      </p>
      <div className={styles["forecast-summary__weather-icon"]}>
        <WeatherIconComponent iconId={icon} />
      </div>
      <p
        className={styles["forecast-summary__temperature"]}
        data-testid="forecast-summary-temperature"
      >
        <span>{temperature.max}</span>
        °C
      </p>
      <button
        className={styles["forecast-summary__button"]}
        type="button"
        onClick={() => handleForecastSelect(date)}
      >
        More details...
      </button>
    </div>
  );
};

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

export default ForecastSummary;
