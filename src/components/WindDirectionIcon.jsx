import React from "react";
import PropTypes from "prop-types";
import arrowCircle from "../assets/img/arrow-circle.png";
import directionLookup from "../data/directionLookup.json";
import styles from "../styles/WindDirectionIcon.module.css";

export default function WindDirectionIcon({ direction }) {
  return (
    <img
      className={styles["wind-direction-icon"]}
      data-testid="wind-direction-icon"
      style={{
        transform: `rotate(${directionLookup[direction].degrees}deg)`,
      }}
      src={arrowCircle}
      alt={`arrow pointing ${directionLookup[direction.humanReadable]}`}
    />
  );
}

WindDirectionIcon.propTypes = {
  direction: PropTypes.string.isRequired,
};
