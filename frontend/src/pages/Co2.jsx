import Explication from "../components/Explication";

import "../CO2.css";

function Co2() {
  return (
    <div className="co2_main_tg">
      <h1>Concentration de Co2</h1>
      <img src="../assets/temp.png" alt="graph temperature" />
      <Explication />
      <Explication />
    </div>
  );
}

export default Co2;
