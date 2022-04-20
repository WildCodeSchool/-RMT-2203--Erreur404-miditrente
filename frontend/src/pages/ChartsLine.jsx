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

function Charts() {
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
  useEffect(() => {
    fetch("https://global-warming.org/api/arctic-api")
      .then((res) => res.json())
      .then((data) => {
        prepareDataSet(data.result);
        prepaConfig(data.result);
      });
  }, []);

  return (
    <div>
      {console.warn(dataSet.labels)};
      {dataSet.labels.length > 0 && <Line data={dataSet} options={options} />}
      <p>
        Ice Extent et Ice Area sont deux mesures différentes de la surface de
        glace au Pôle, utilisée par différents organismes. Le point commun des
        deux méthodes consiste à diviser la zone d&apos;étude en blocs de
        référence.
      </p>
      <p>
        <strong>Ice Extent:</strong> Cette mesure est la plus globale et ne
        prend pas en compte les zones non couvertes par la glace à
        l&apos;intérieur de la zone couverte. Chaque bloc de référence est
        considéré de manière binaire au-dessus d&apos;un seuil de 15%: absence
        de glace ou glace omniprésente.
      </p>
      <p>
        <strong>Ice Area:</strong> Cette mesure est plus précise que la
        précédente et prend en compte la quantité de glace par bloc de référence
        en pourcentage. au dessus du seuil de 15%. Un bloc peut ainsi contenir
        15% de glace, ou plus.
      </p>
    </div>
  );
}
export default Charts;
