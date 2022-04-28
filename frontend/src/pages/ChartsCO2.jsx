import { useState, useEffect } from "react";
import options from "../options/options_CO2";
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
const apiOnline = "https://global-warming.org/api/co2-api";
const apiLocale = "./datasets/co2.json";
const CO2 = "CO\u2082";
// fin des constantes de données

/**
 *  réglages des axes du tableau
 */
const dataModel = {
  labels: [],
  datasets: [
    {
      label: "Valeurs quotidiennes (cycle)", // titre du premier graphique
      data: [],
      pointStyle: "dash",
      radius: 0.1,
      borderColor: "rgba(136, 78, 160,0.8)",
      backgroundColor: "rgba(136, 78, 160, 0.8)",
    },
    {
      label: "Tendance moyenne (évolution)", // titre du second graphique
      data: [],
      pointStyle: "dash",
      borderColor: "rgba(52,73,94, 0.8)", // "rgb(93, 109, 126)",
      backgroundColor: "rgba(52, 73, 94, 0.8)",
    },
  ],
};

function ChartsCO2() {
  const [dataSet, setDataSet] = useState(dataModel);

  const prepaConfig = (data) => {
    options.plugins.title.text = `Concentration de Dioxyde de Carbone dans l'atmosphère (de ${
      data[0].year
    } à ${data[data.length - 1].year})`;
  };

  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.year);
      dataSetProv.datasets[0].data.push(el.cycle);
      dataSetProv.datasets[1].data.push(el.trend);
    });
    setDataSet(dataSetProv);
  };

  const getStaticData = (url, callback) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.co2);
        prepaConfig(data.co2);
      })
      // ternaire de fetch des données locales en cas d'erreur
      .catch((err) => (callback ? callback(apiLocale) : console.error(err)));
  };

  useEffect(() => {
    getStaticData(apiOnline, getStaticData);
  }, []);
  return (
    // affichage du composant graphique
    <div className="graph_render_dd">
      {dataSet.labels.length > 0 && <Line data={dataSet} options={options} />}
      <p className="CetteDivDoitDisparaitre_dd">parlons {CO2}</p>
    </div>
  );
}
export default ChartsCO2;
