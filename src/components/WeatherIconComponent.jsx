import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import styles from "../styles/WeatherIconComponent.module.css";

export default function WeatherIconComponent({ iconId }) {
  return (
    <div
      className={styles["weather-icon-component"]}
      data-testid="weather-icon-component"
    >
      <WeatherIcon
        iconId={iconId}
        name="owm"
        style={{ transform: "scale(2.75)", color: "#fff" }}
      />
    </div>
  );
}

WeatherIconComponent.propTypes = {
  iconId: PropTypes.string.isRequired,
};
