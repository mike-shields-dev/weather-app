import React from "react";
import PropTypes from "prop-types";
import directionLookup from "../data/directionLookup.json";
import styles from "../styles/WindDirectionIcon.module.css";

const WindDirectionIcon = ({ direction }) => {
  return (
    <svg
      className={styles["wind-direction-icon"]}
      data-testid="wind-direction-icon"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
      fill="currentColor"
      style={{
        transform: `rotate(${directionLookup[direction].degrees}deg)`,
      }}
    >
      <title>{`arrow pointing ${directionLookup[direction].humanReadable}`}</title>
      <path d="M480.086,490L245,339.229L9.914,490L245,0L480.086,490z" />
    </svg>
  );
};

WindDirectionIcon.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default WindDirectionIcon;
