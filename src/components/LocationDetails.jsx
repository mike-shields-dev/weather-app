import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/LocationDetails.module.css";

const LocationDetails = ({ city, country }) => {
  return (
    <header
      className={styles["location-details"]}
      data-testid="location-details"
    >
      <h1 className={styles["location-details__title"]}>
        {city}, {country}
      </h1>
    </header>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
