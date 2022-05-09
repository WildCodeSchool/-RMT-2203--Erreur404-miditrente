import React from "react";

function Filter({ value, handleValue }) {
  return (
    <div className="filter_main_tg">
      <input
        type="text"
        id="search"
        value={value}
        className="filter_input_tg"
        onChange={(event) => handleValue(event.target.value)}
      />
    </div>
  );
}

export default Filter;
