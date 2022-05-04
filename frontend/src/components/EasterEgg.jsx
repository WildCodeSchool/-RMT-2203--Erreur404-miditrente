import React from "react";
import "./EasterEgg.css";
import notime from "../assets/notime.gif";
import horloge from "../assets/horloge.gif";
import horloge2 from "../assets/horloge2.gif";

function EasterEgg() {
  return (
    <div className="easterEgg_main_tg">
      <img className="easterEgg_main_img" src={notime} alt="no time" />

      <div className="set">
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
        <img className="easterEgg_img" src={horloge} alt="horloge" />
        <h1 className="easterEgg_title">midiTrente</h1>
        <img
          className="easterEgg_img correction"
          src={horloge2}
          alt="horloge2"
        />
      </div>
    </div>
  );
}

export default EasterEgg;
