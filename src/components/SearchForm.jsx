import React from "react";
import PropTypes from "prop-types";

export default function SearchForm({
  handleChange,
  handleSubmit,
  searchText,
  placeholder,
}) {
  return (
    <div className="search-form" data-testid="search-form">
      <input
        className="search-form__input"
        data-testid="search-form-input"
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        value={searchText}
      />
      <button
        className="search-form__button"
        data-testid="search-form-button"
        onClick={handleSubmit}
        type="submit"
      >
        search
      </button>
    </div>
  );
}

SearchForm.defaultProps = {
  placeholder: "Enter your search",
  searchText: "",
};

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  placeholder: PropTypes.string,
};
