import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="home_main_tg">
      <img src="./src/assets/terre.gif" className="home_logo_tg" alt="logo" />
      <button type="button" className="home_bouton_tg">
        <Link to="/Engagement">
          AGIR <br /> MAINTENANT
        </Link>
      </button>
    </main>
  );
}

export default Welcome;
