import React from "react";
import Explication from "../components/Explication";
import explicationData from "../datas/explication-data";

import "../CO2.css";

function Co2() {
  return (
    <div className="co2_main_tg">
      <h1>Concentration de Co2</h1>
      <div className="co2_graph_tg" />
      <Explication explicationData={explicationData[1]} />
      <Explication explicationData={explicationData[2]} />
    </div>
  );
}

export default Co2;
