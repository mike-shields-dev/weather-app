import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

export default function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries" data-testid="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, description, icon, temperature } = forecast;
        return (
          <ForecastSummary
            key={`forecast-summary-${date}`}
            date={date}
            description={description}
            temperature={temperature}
            icon={icon}
          />
        );
      })}
      ;
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
};
