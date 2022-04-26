import React from "react";

function Filter() {
  return (
    <div>
      <label htmlFor="search">
        <input type="text" id="search" />
      </label>
      <label htmlFor="categorie">
        <select name="categorie" id="categorie">
          <option value="1">Facile</option>
          <option value="2">Intermédiaire</option>
          <option value="3">Expert</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
