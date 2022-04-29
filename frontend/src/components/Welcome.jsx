import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="home_main_tg">
      <img src="./src/assets/terre.gif" className="home_logo_tg" alt="logo" />
      <Link to="/Engagement">
        <button type="button" className="home_bouton_tg">
          AGIR <br /> MAINTENANT
        </button>
      </Link>
    </main>
  );
}

export default Welcome;
