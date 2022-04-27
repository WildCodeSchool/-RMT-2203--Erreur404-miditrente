import React from "react";

function Filter({ value, handleValue }) {
  return (
    <label htmlFor="search" className="filter_label_tg">
      <input
        type="text"
        id="search"
        value={value}
        placeholder="Rechercher"
        className="filter_input_tg"
        onChange={(event) => handleValue(event.target.value)}
      />
    </label>
  );
}

export default Filter;
