import React from "react";
import PropTypes from "prop-types";
import unixTimestampToHumanReadableDate from "../helpers/unixTimestampToFormattedDate";

export default function FormattedDate({ date }) {
  const formattedDate = unixTimestampToHumanReadableDate(date);
  return <span>{formattedDate}</span>;
}

FormattedDate.propTypes = {
  date: PropTypes.number.isRequired,
};
