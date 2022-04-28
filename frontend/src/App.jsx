import ChartsIceExtent from "./pages/ChartsIceExtent";
import ChartsTemp from "./pages/ChartsTemp";
import ChartsCO2 from "./pages/ChartsCO2";
import "./App.css";

function App() {
  return (
    <div className="charts_graph_dd" id="supprimez-moi-cette-div">
      <ChartsCO2 />
      <ChartsTemp />
      <ChartsIceExtent />
    </div>
  );
}

export default App;
