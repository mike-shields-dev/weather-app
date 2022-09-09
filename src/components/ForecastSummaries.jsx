import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastSummaries.module.css";
import ForecastSummary from "./ForecastSummary";

export default function ForecastSummaries({ forecasts, handleForecastSelect }) {
  return (
    <div
      className={styles["forecast-summaries"]}
      data-testid="forecast-summaries"
    >
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            key={`forecast-summary-${forecast.date}`}
            handleForecastSelect={handleForecastSelect}
            {...forecast}
          />
        );
      })}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  handleForecastSelect: PropTypes.func.isRequired,
};
