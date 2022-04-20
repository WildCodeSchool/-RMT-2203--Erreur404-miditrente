import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

function Charts() {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [
      {
        label: "extent",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "area",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });

  const prepareDataSet = (jeux) => {
    /** Récupération du jeux d'année */
    const dataSetProv = { ...dataSet };
    jeux.forEach((jeu) => {
      dataSetProv.labels.push(jeu.year);
      dataSetProv.datasets[0].data.push(jeu.extent);
      dataSetProv.datasets[1].data.push(jeu.area);
    });
    setDataSet(dataSetProv);
  };
  useEffect(() => {
    fetch("https://global-warming.org/api/arctic-api")
      .then((res) => res.json())
      .then((data) => prepareDataSet(data.result));
  }, []);

  return (
    <div>
      {console.warn(dataSet)}
      {dataSet.labels.length > 0 && <Line data={dataSet} options={options} />}
      <p>component LINE should be up here👆</p>
    </div>
  );
}
export default Charts;
