import React from "react";
import "./EasterEgg.css";
import easterEgg from "../datas/easteregg";

function EasterEgg() {
  return (
    <div className="easterEgg_main_tg">
      <div className="easterEgg_container_tg">
        {easterEgg.map((img, index) => (
          <div className={index % 2 === 0 ? "set" : "set2"}>
            <img src={img.image} alt={img.alt} />
            <img src={img.image2} alt={img.alt} className="correction" />
            <h1>{img.titre}</h1>
            <img src={img.image2} alt={img.alt} className="correction" />
            <img src={img.image} alt={img.alt} />
            <h1>{img.titre}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EasterEgg;
