/**
 *  options de titrage du graphique
 */
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
        callback: function (value) {
          // callback: function (value, index, ticks) {
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

export default options;
