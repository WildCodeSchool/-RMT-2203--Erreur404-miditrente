import React from "react";
import Explication from "../components/Explication";
import explicationData from "../datas/explication-data";
import ChartsTemp from "./ChartsTemp";
import ChartsCO2 from "./ChartsCO2";
import ChartsIceExtent from "./ChartsIceExtent";

import "../CO2.css";

function Co2() {
  return (
    <div className="co2_main_tg">
      <h1 className="co2_firstchild_tg">Concentration de CO2</h1>
      <ChartsCO2 />
      <h1>Courbe de température</h1>
      <ChartsTemp />
      <h1>Fonte des glaces</h1>
      <ChartsIceExtent />
      {explicationData.map((explication) => (
        <Explication data={explication} />
      ))}
    </div>
  );
}

export default Co2;
