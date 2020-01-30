import React from "react";

import "./searchbox.styles.css";

export const SearchBox = ({ placeholderProp, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholderProp}
      onChange={handleChange}
    />
  );
};
