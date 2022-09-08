import React from "react";
import PropTypes from "prop-types";

export default function LocationDetails({ city, country }) {
  return (
    <header className="location-details" data-testid="location-details">
      <h1 className="location-details__title">
        {city}, {country}
      </h1>
    </header>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
