import React from "react";

function Button({ categories, handleClick }) {
  return (
    <div className="buttons">
      {categories.map((b) => {
        return (
          <button
            key={b}
            type="button"
            onClick={() => handleClick(b)}
            className="btn"
          >
            {b}
          </button>
        );
      })}
    </div>
  );
}

export default Button;
