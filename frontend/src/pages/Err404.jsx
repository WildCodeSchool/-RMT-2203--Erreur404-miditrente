import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./err404.css";
import error from "../assets/error.gif";
import chiffre from "../assets/orange4.png";

export default function Err404() {
  const navigate = useNavigate();

  
  useEffect(() => {
      let redirect = setTimeout(() => {
        navigate("/");
      }, 15000);
      return () => {
        clearTimeout(redirect)
      }
    }, []);
  
  function home () {
    navigate("/")
  }



  return (
    <div className="err404_background_qb">
      <div className="err404_page_qb">
        <h1>Earth not found ! </h1>
        <div className="err404_earth_qb">
          <img src={chiffre} className="err404_chiffre_qb" alt="chiffre 4" />
          <img src={error} className="err404_error_qb" alt="fin du monde" />
          <img src={chiffre} className="err404_chiffre_qb" alt="chiffre 4" />
        </div>
        <p>Do you want to save the Earth ? Click here !</p>
          <button  onClick={ () => home() }  type="submit" className="err404_button_404_qb">
            Save the world
          </button>
      </div>
    </div>
  );
}
