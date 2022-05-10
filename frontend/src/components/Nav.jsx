/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png";

import "./Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className={`navbar_mt ${showlinks ? "show_nav_mt" : "hidden_nav_mt"}`}>
      <div className="navbar_logo_mt" />
      <Link to="/" className="nav_logo_mt">
        <img src={logo} className="nav_logo_mt" alt="logo" />
      </Link>

      <ul className="navbar_links_mt">
        <li className="navbar_item_mt">
          <Link
            to="/"
            activeClassName="active"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Info"
            activeClassName="active"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            A propos
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Co2"
            activeClassName="active"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Concentration Co2
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Engagement"
            activeClassName="active"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Agir maintenant
          </Link>
        </li>
        <li className="navbar_item_mt">
          <Link
            to="/Contact"
            activeClassName="active"
            className="navbar_link_mt"
            onClick={() => setShowLinks(!showlinks)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger_mt"
        onClick={() => setShowLinks(!showlinks)}
      >
        <span className="burger_bar_mt" />
      </button>
    </nav>
  );
}

export default Nav;
