/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  const handleShowLinks = () => setShowLinks(!showlinks);
  return (
    <nav className={`navbar_mt ${showlinks ? "show_nav_mt" : "hidden_na_mt"}`}>
      <div calssName="navbar_logo_mt">Logo</div>
      <ul className="navbar_links_mt">
        <li className="navbar_item_mt">
          <a href="/" className="navbar_link_mt">
            A propos
          </a>
        </li>
        <li className="navbar_item_mt">
          <a href="/" className="navbar_link_mt">
            Concentration Co2
          </a>
        </li>
        <li className="navbar_item_mt">
          <a href="/" className="navbar_link_mt">
            Fonte des glaces
          </a>
        </li>
        <li className="navbar_item_mt">
          <a href="/" className="navbar_link_mt">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar_burger_mt" onClick={handleShowLinks}>
        <span className="burger_bar_mt" />
      </button>
    </nav>
  );
}

export default Nav;
