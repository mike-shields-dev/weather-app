import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/SearchForm.module.css";

const SearchForm = ({
  handleChange,
  handleSubmit,
  searchText,
  placeholderText,
}) => {
  return (
    <div className="search-form" data-testid="search-form">
      <input
        className={`${styles["search-form__input"]}`}
        data-testid="search-form-input"
        onChange={handleChange}
        type="text"
        placeholder={placeholderText}
        value={searchText}
      />
      <button
        className="search-form__button shadow"
        data-testid="search-form-button"
        onClick={handleSubmit}
        type="submit"
      >
        search
      </button>
    </div>
  );
};

SearchForm.defaultProps = {
  placeholderText: "Enter your search",
  searchText: "",
};

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  placeholderText: PropTypes.string,
};

export default SearchForm;
