import { useState, useEffect } from "react";
import options from "../options/options_temperature";
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

/**
 *  réglages des axes du tableau
 */
const dataModel = {
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
};

function ChartsTemp() {
  const [dataSet, setDataSet] = useState(dataModel);
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
