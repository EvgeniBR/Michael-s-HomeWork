import React from "react";
import "./Searchbox.styles.scss";

const Searchbox = ({placeholder ,handleChange }) => {
  return (
      <>
    <input
      className="search"
      type="search"
      placeholder={`🏸${placeholder}`}
      onChange={handleChange}
    />
    </>
  );
};

export default Searchbox;
