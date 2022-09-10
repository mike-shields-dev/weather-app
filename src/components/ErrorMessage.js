import React from "react";
import PropTypes from "prop-types";

export default function ErrorModal({ errorMessage, handleClick }) {
  return (
    <div className="error-message">
      <p className="error-message__text">{errorMessage}</p>
      <button
        className="error-message__button"
        onClick={handleClick}
        type="button"
      >
        OK
      </button>
    </div>
  );
}

ErrorModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
