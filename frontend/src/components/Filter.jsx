import React from "react";

function Filter({ value, handleValue }) {
  return (
    <div className="filter_main_tg">
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          value={value}
          placeholder="Rechercher"
          className="filter_input_tg"
          onChange={(event) => handleValue(event.target.value)}
        />
      </label>

      <label htmlFor="categorie">
        <select name="categorie" id="categorie" className="filter_select_tg">
          <option value="1">Facile</option>
          <option value="2">Intermédiaire</option>
          <option value="3">Expert</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
