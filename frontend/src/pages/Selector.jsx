import ChartsIceExtent from "./ChartsIceExtent";
import ChartsTemp from "./ChartsTemp";
import ChartsCO2 from "./ChartsCO2";
import { useState } from "react/cjs/react.production.min";

function Selector() {
  return (
    <div className="charts_graph_dd" id="supprimez-moi-cette-div">
      <ChartsCO2 />
      <ChartsTemp />
      <ChartsIceExtent />
    </div>
  );
}

export default Selector;
