import React from "react";
import { Helmet } from "react-helmet";
import Explication from "../components/Explication";
import explicationData from "../datas/explication-data";
import ChartsTemp from "./ChartsTemp";
import ChartsCO2 from "./ChartsCO2";
import ChartsIceExtent from "./ChartsIceExtent";

import "../CO2.css";

function Co2() {
  return (
    <div className="co2_main_tg">
      <Helmet>
        <title> 3arth keeper | Situation </title>
      </Helmet>
      <h2 className="co2_firstchild_tg">Concentration de CO2</h2>
      <ChartsCO2 />
      <h2>Courbe de température</h2>
      <ChartsTemp />
      <h2>Fonte des glaces</h2>
      <ChartsIceExtent />
      {explicationData.map((explication) => (
        <Explication data={explication} />
      ))}
    </div>
  );
}

export default Co2;
