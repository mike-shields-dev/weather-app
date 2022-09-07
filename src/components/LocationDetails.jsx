import React from "react";
import PropTypes from "prop-types";

export default function LocationDetails({ city, country }) {
  return (
    <header>
      <h1>
        {city}, {country}
      </h1>
    </header>
  );
}

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
