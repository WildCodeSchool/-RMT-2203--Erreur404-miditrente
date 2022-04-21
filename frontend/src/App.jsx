import Charts from "./pages/ChartsIceExtent";
import ChartsTemp from "./pages/ChartsTemp";
import "./App.css";

function App() {
  return (
    <div className="charts_graph_dd" id="supprimez-moi-cette-div">
      <Charts />
      <p>component Charts should be up here👆</p>
      <ChartsTemp />
      <p>component Temperature should be up here👆</p>
    </div>
  );
}

export default App;
