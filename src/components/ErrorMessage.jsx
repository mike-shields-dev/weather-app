import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ErrorMessage.module.css";

const ErrorMessage = ({ errorMessage, handleClick }) => {
  return (
    <div className={styles["error-message"]}>
      <span className={styles["error-message__text"]}>{errorMessage}</span>
      <button
        className={styles["error-message__button"]}
        onClick={handleClick}
        type="button"
      >
        OK
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ErrorMessage;
