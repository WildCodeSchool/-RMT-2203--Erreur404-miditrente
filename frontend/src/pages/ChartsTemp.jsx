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

import reglages from "../options/options_temperature";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartsTemp() {
  const [dataSet, setDataSet] = useState(reglages.dataModel);
  const prepaConfig = (data) => {
    // légendage
    reglages.options.plugins.title.text = `Estimation de l'évolution de la température moyenne au sol (de ${Math.round(
      data[0].time
    )} à ${Math.round(data[data.length - 1].time)})`;
  };

  /**
   * préparation des données de l'API
   * @param {array} data
   */
  const prepareDataSet = (data) => {
    /** Récupération du jeu de dates */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.time);
      dataSetProv.datasets[0].data.push(el.station);
    });
    setDataSet(dataSetProv);
  };

  /**
   * fetch des données de l'API
   * En cas d'erreur, lecture du json local
   * @param {api} url
   * @param {fonction} callback
   */
  const getStaticData = (url, callback) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.result);
        prepaConfig(data.result);
      })
      // ternaire de fetch dees données locales en cas d'erreur
      .catch((err) =>
        callback ? callback(reglages.apiLocale) : console.error(err)
      );
  };

  useEffect(() => {
    getStaticData(reglages.apiOnline, getStaticData);
  }, []);
  return (
    // affichage du composant graphique
    <div className="graph_render_dd">
      {dataSet.labels.length > 0 && (
        <Line data={dataSet} options={reglages.options} />
      )}
      <p>Parlons température...</p>
    </div>
  );
}
export default ChartsTemp;
