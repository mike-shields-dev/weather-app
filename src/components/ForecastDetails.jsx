import React from "react";
import PropTypes from "prop-types";
import ordinalDate from "../helpers/ordinalDate";

export default function ForecastDetails({ date, temperature, humidity, wind }) {
  const dateString = new Date(date).toDateString();
  const [weekday, month, dayOfMonth] = dateString.split(" ");
  const formattedDate = `${weekday} ${ordinalDate(+dayOfMonth)} ${month}`;

  return (
    <div className="forecast-details">
      <h2
        className="forecast-details__date"
        data-testid="forecast-details-date"
      >
        {formattedDate}
      </h2>
      <p
        className="forecast-details__temperature-max"
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
      <p className="forecast-details__wind" data-testid="forecast-details-wind">
        <span>{wind.speed}</span>mph <span>{wind.direction}</span>
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
