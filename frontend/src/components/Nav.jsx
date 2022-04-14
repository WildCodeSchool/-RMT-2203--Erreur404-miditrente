/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks(!showlinks);
  return (
    <nav className={`navbar ${showlinks ? "show-nav" : "hidden-nav"}`}>
      <div calssNmae="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            A propos
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Concentration Co2
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Fonte des glaces
          </a>
        </li>
        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Nav;
