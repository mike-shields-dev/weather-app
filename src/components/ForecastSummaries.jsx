import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ForecastSummaries.module.css";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({
  forecasts,
  handleForecastSelect,
  selectedDate,
}) => {
  return (
    <div
      className={styles["forecast-summaries"]}
      data-testid="forecast-summaries"
    >
      {forecasts.map((forecast) => {
        return (
          <ForecastSummary
            handleForecastSelect={handleForecastSelect}
            key={`forecast-summary-${forecast.date}`}
            selectedDate={selectedDate}
            {...forecast}
          />
        );
      })}
    </div>
  );
};

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
  selectedDate: PropTypes.number.isRequired,
};

export default ForecastSummaries;
