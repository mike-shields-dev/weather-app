import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastSummary.module.css";
import WeatherIconComponent from "./WeatherIconComponent";
import weekdayFromUnixTime from "../helpers/weekdayFromUnixTime";

const ForecastSummary = ({
  date,
  description,
  handleForecastSelect,
  icon,
  temperature,
  selectedDate,
}) => {
  const isDateToday = new Date().getDay() === new Date(date).getDay();
  const isSelected = date === selectedDate;
  const modifierClass = styles["forecast-summary--selected"];
  return (
    <div
      className={`${styles["forecast-summary"]} ${
        isSelected ? modifierClass : null
      }`}
      data-testid="forecast-summary"
    >
      <h2
        className={styles["forecast-summary__date"]}
        data-testid="forecast-summary-date"
      >
        {isDateToday ? "Today" : weekdayFromUnixTime(date)}
      </h2>
      <WeatherIconComponent iconId={icon} />
      <p
        className="forecast-summary__description"
        data-testid="forecast-summary-description"
      >
        {description}
      </p>
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
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  selectedDate: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
