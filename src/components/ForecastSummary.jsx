import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import ordinalDate from "../helpers/ordinalDate";

export default function ForecastSummary({
  date,
  description,
  icon,
  temperature,
}) {
  const dateString = new Date(date).toDateString();
  const [weekday, month, dayOfMonth] = dateString.split(" ");
  const formattedDate = `${weekday} ${ordinalDate(+dayOfMonth)} ${month}`;

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <h2 className="forecast-summary__date">{formattedDate}</h2>
      <p className="forecast-summary__description">{description}</p>
      <WeatherIcon
        className="forecast-summary__icon"
        data-testid="forecast-summary-icon"
        iconId={icon}
        name="owm"
      />
      <p className="forecast-summary__temperature">{temperature.max}</p>
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
};
