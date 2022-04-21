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
      text: `Fonte des glaces du Cercle Polaire`, // ajouter titre dynamique du graphique complet (date in:out)
    },
  },
};

function ChartsCO2() {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [
      {
        label: "Ice Extent", // ajouter titre dynamique du premier graphique
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Ice Area", // ajouter titre dynamique du second graphique
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  });
  const prepaConfig = (data) => {
    options.plugins.title.text = `Concentration de Dioxyde de Carbone dans l'atmosphère (de ${
      data[0].day
    } à ${data[data.length - 1].day})`;
  };

  const prepareDataSet = (data) => {
    /** Récupération du jeu dde dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.day);
      // dataSetProv.datasets[0].data.push(el.extent);
      // dataSetProv.datasets[1].data.push(el.area);
    });
    setDataSet(dataSetProv);
  };
  useEffect(() => {
    fetch("https://global-warming.org/api/co2-api")
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
export default ChartsCO2;
