import { Line } from "react-chartjs-2";

function Charts() {
  return (
    <canvas className="graph1_dd" width="400" height="400">
      <Line />
      <p>component LINE should be up here👆</p>
    </canvas>
  );
}
/*
const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.red,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4
    }, {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      tension: 0.4
    }, {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.green,
      fill: false
    }
  ]
};
*/

/*
<div className="chart">
        <Line data={this.state.chartData}
        width="600"
        height="400"
        options={{
          maintainAspectRatio: false,
          xAxes: [{gridLines: {display: false}}]
        }} />
      </div>
*/
export default Charts;
