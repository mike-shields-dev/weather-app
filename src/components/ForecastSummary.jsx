import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import FormattedDate from "./FormattedDate";

export default function ForecastSummary({
  date,
  description,
  icon,
  temperature,
  handleForecastSelect,
}) {
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <h2
        className="forecast-summary__date"
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
      <WeatherIcon
        className="forecast-summary__icon"
        data-testid="forecast-summary-icon"
        iconId={icon}
        name="owm"
      />
      <p
        className="forecast-summary__temperature"
        data-testid="forecast-summary-temperature"
      >
        <span>{temperature.max}</span>
        °C
      </p>
      <button type="button" onClick={() => handleForecastSelect(date)}>
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
