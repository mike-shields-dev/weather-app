import React from "react";
import PropTypes from "prop-types";
import unixTimestampToHumanReadableDate from "../helpers/unixTimestampToFormattedDate";

const FormattedDate = ({ date }) => {
  return <span>{unixTimestampToHumanReadableDate(date)}</span>;
};

FormattedDate.propTypes = {
  date: PropTypes.number.isRequired,
};

export default FormattedDate;
