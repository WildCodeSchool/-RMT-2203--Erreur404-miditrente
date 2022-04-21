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
      text: `Température moyenne`, // ajouter titre dynamique du graphique complet (date in:out)
    },
  },
};

function ChartsTemp() {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [
      {
        label: "Température", // aka Station
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });
  const prepaConfig = (data) => {
    options.plugins.title.text = `Estimation de l'évolution de la température moyenne au sol (de ${
      data[0].month
    } à ${data[data.length - 1].month})`;
  };

  // const calcDate = (yearMonth) => {
  // const month = Math.floor(1 + 12 * Math.abs(Number(yearMonth.split(`.`))));
  // const year = Math.floor(yearMonth);
  // return Date(`${year}-${month}-01`);
  // };

  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.time);
      dataSetProv.datasets[0].data.push(el.station);
      // dataSetProv.datasets[1].data.push(el.land);
    });
    setDataSet(dataSetProv);
  };
  useEffect(() => {
    fetch("https://global-warming.org/api/temperature-api")
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.result);
        prepaConfig(data.result);
      });
  }, []);

  return (
    <div>
      {dataSet.labels.length > 0 && <Line data={dataSet} options={options} />}
      <p>text</p>
    </div>
  );
}
export default ChartsTemp;
