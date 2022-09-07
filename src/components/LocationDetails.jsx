import React from "react";
import PropTypes from "prop-types";

export default function LocationDetails({ location }) {
  const { city, country } = location;
  return (
    <header>
      <h1>
        {city}, {country}
      </h1>
    </header>
  );
}

LocationDetails.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
