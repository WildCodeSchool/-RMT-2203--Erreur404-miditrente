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
const apiOnline = "https://global-warming.org/api/arctic-api";
const apiLocale = "./datasets/arcticExtent.json";
// fin des constantes de données

// constante de titrage du graphique
const options = {
  //   scales: {
  //   x: {
  //     // configuration de l'axe horizontal
  //     ticks: {
  //       // For a category axis, the val is the index so the lookup via getLabelForValue is needed
  //       callback: function (val, index) {
  //         // affichage d'une date arrondie à l'année, une colonne sur deux.
  //         return index % 2 === 0 ? Math.round(this.getLabelForValue(val)) : "";
  //       },
  //     },
  //     display: true,
  //     title: {
  //       display: true,
  //       text: "Année",
  //     },
  //   },
  //   y: {
  //     // configuration de l'axe vertical
  //     ticks: {
  //       callback: function (value, index, ticks) {
  //         console.warn(index, ticks);
  //         return `${value} °C`;
  //       },
  //     },
  //     display: true,
  //     title: {
  //       // titre de l'axe vertical
  //       display: true,
  //       text: "Température moyenne",
  //     },
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: ``, // titre par défaut, remplacé via prepaConfig
    },
  },
};

function ChartsIceExtent() {
  const [dataSet, setDataSet] = useState({
    labels: [],
    datasets: [
      {
        label: "Ice Extent", // titre du premier graphique
        data: [],
        borderColor: "rgb(47, 73, 239)", // "rgb(255, 99, 132)",
        backgroundColor: "rgba(47, 73, 239, 0.8)", // "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Ice Area", // titre du second graphique
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
    ],
  });
  const prepaConfig = (data) => {
    // légendage
    // 2exp :&sup2;
    options.plugins.title.text = `Fonte des glaces du Cercle Polaire (de ${
      data[0].year
    } à ${data[data.length - 1].year})`;
  };

  const prepareDataSet = (data) => {
    /** Récupération du jeu d'année */
    const dataSetProv = { ...dataSet };
    data.forEach((el) => {
      dataSetProv.labels.push(el.year);
      dataSetProv.datasets[0].data.push(el.extent);
      dataSetProv.datasets[1].data.push(el.area);
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
      <div className="explications_ice_dd">
        <p>
          Ice Extent et Ice Area sont deux mesures différentes de la surface de
          glace au Pôle, utilisées par différents organismes. Le point commun
          des deux méthodes consiste à diviser la zone d&apos;étude en blocs de
          référence.
        </p>
        <p>
          <strong>Ice Extent:</strong> Cette mesure est la plus globale et ne
          prend pas en compte les zones non couvertes par la glace à
          l&apos;intérieur de la zone observée. Chaque bloc de référence est
          considéré de manière binaire au-dessus d&apos;un seuil de 15%: absence
          de glace ou glace omniprésente.
        </p>
        <p>
          <strong>Ice Area:</strong> Cette mesure est plus précise que la
          précédente et prend en compte la quantité de glace par bloc de
          référence en pourcentage au dessus du seuil de 15%. Un bloc peut ainsi
          contenir 15% de glace, ou plus, ou ne pas en contenir du tout.
        </p>
      </div>
    </div>
  );
}
export default ChartsIceExtent;
