/**
 *  options de titrage du graphique
 */
const options = {
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
        callback: function (value) {
          // callback: function (value, index, ticks) {
          return `${value}`;
        },
      },
      display: true,
      title: {
        // titre de l'axe vertical
        display: true,
        text: "Surface en km\u00b2",
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: `titre`, // // titre du graphique complet (date in:out)
    },
  },
};

/**
 *  réglages des axes du tableau
 */
const dataModel = {
  labels: [],
  datasets: [
    {
      label: "Ice Extent", // titre du premier graphique
      data: [],
      // tension 0.5,
      borderColor: "rgb(47, 73, 239)", // "rgb(255, 99, 132)",
      backgroundColor: "rgba(47, 73, 239, 0.8)", // "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Ice Area", // titre du second graphique
      data: [],
      // tension: 0.5,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.8)",
    },
  ],
};

const apiOnline = "https://global-warming.org/api/arctic-api";
const apiLocale = "./datasets/arcticExtent.json";

const reglages = { options, dataModel, apiOnline, apiLocale };

export default reglages;
