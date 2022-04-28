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
// constantes de données, api distante et copie locale
const apiOnline = "https://global-warming.org/api/temperature-api";
const apiLocale = "./datasets/temperature.json";
// fin des constantes de données

// constante de titrage du graphique
const options = {
  responsive: true,
  scales: {
    x: {
      // configuration de l'axe horizontal
      ticks: {
        // For a category axis, the val is the index so the lookup via getLabelForValue is needed
        callback: function (val, index) {
          // affichage d'une date arrondie à l'année, une colonne sur deux.
          return index % 2 === 0 ? Math.round(this.getLabelForValue(val)) : "";
        },
      },
      display: true,
      title: {
        display: false,
        text: "Année",
      },
    },
    y: {
      // configuration de l'axe vertical
      ticks: {
        callback: function (value, index, ticks) {
          return `${value} °C`;
        },
      },
      display: true,
      title: {
        // titre de l'axe vertical
        display: true,
        text: "Température moyenne en °C",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: `Évolution de la température moyenne`, // titre du graphique complet (date in:out)
    },
  },
};

function ChartsTemp() {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [
      {
        label: "Température", // aka Station dans le set de données
        data: [],
        borderWidth: 1,
        radius: 1,
        borderColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        color: "rgb(1, 99, 132)",
      },
    ],
  });
  const prepaConfig = (data) => {
    options.plugins.title.text = `Estimation de l'évolution de la température moyenne au sol (de ${Math.round(
      data[0].time
    )} à ${Math.round(data[data.length - 1].time)})`;
  };

  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.time);
      dataSetProv.datasets[0].data.push(el.station);
    });
    setDataSet(dataSetProv);
  };
  // fetch des données online. En cas d'erreur, fetch des données locales.
  const getStaticData = (url, callback) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.result);
        prepaConfig(data.result);
      })
      // ternaire de fetch dees données locales en cas d'erreur
      .catch((err) => (callback ? callback(apiLocale) : console.error(err)));
  };

  useEffect(() => {
    getStaticData(apiOnline, getStaticData);
  }, []);

  return (
    // affichage du composant graphique
    <div className="graph_render_dd">
      {dataSet.labels.length > 0 && <Line data={dataSet} options={options} />}
      <p>Parlons température...</p>
    </div>
  );
}
export default ChartsTemp;

// régler la hauteur du graph pour mobilefirst
