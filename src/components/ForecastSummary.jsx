import React from "react";
import PropTypes from "prop-types";

export default function ForecastSummary({
  date,
  description,
  icon,
  temperature,
}) {
  return (
    <div className="forecast-summary">
      <h2 className="forecast-summary__date">{date}</h2>
      <p className="forecast-summary__description">{description}</p>
      <p className="forecast-summary__icon">{icon}</p>
      <p className="forecast-summary__temperature">{temperature}</p>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};
