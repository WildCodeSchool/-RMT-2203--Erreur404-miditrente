import React, { useState } from "react";

import "../pages/faq.css";
import planetfaq from "../assets/planetfaq.png";

/**
 *
 * @returns FAQ content
 */

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: `C'est quoi le "jour du dépassement"?`,
      answer: `Le jour du dépassement de la Terre (en anglais : Earth Overshoot Day) correspond à la date de l’année, calculée par l'ONG américaine Global Footprint Network, à partir de laquelle l’humanité est supposée avoir consommé l’ensemble des ressources que la planète est capable de régénérer en un an. Passé cette date, l’humanité puiserait donc de manière irréversible dans les réserves "non renouvelables" (à échelle de temps humaine) de la Terre.\nEn 2022, l'ONG a estimé cette date au 29 juillet. La date peut aussi être calculée par pays. En France, elle a été atteinte le 5 mai 2022. Cela signifie globalement qu'à ce rythme, la France aurait besoinde de 2,9 Terre(s) pour subvenir à ses besoins de l'année.`,
      open: false,
    },
    {
      question: "C'est quoi une limite planétaire?",
      answer: `Les limites planétaires sont les seuils que l'humanité ne devrait pas dépasser pour ne pas compromettre les conditions favorables dans lesquelles elle a pu se développer et pour pouvoir durablement vivre dans un écosystème sûr, c’est-à-dire en évitant les modifications brutales et difficilement prévisibles de l'environnement planétaire.\nCe concept a été proposé par une équipe internationale de vingt-six chercheurs et publié en 2009. Il a depuis été mis à jour par des publications régulières.`,
      open: false,
    },
    {
      question: "Combien de limites planétaires existe-t-il?",
      answer:
        "Il existe neuf processus retenus comme limites, dont six sont déjà franchies(point rouge):\n🟢 l’acidification des océans\n🟢 la déplétion de la couche d’ozone\n🟢 les aérosols atmosphériques\n🔴 le changement climatique\n🔴 l’érosion de la biodiversité\n🔴 les perturbations globales du cycle de l’azote et du phosphore\n🔴 l’usage des sols\n🔴 les pollutions chimiques\n🔴 l’usage de l’eau douce (dernière limite franchie en 2022)",
      open: false,
    },
    {
      question: `C’est quoi le changement climatique?`,
      answer: `On considère que de dépassement de certains seuils  en matière de volume émis ou extrait de l’environnement sont responsable de perturbations significatives de la température globale, notamment une variation de plus de 1 W/m2 du forçage radiatif.\nLe forçage radiatif, appliqué au réchauffement climatique, mesure la propension d’un facteur, comme par exemple la concentration en gaz à effet de serre, à perturber l’équilibre énergétique de la Terre`,
      open: false,
    },
    {
      question: "C’est quoi l’érosion de la biodiversité?",
      answer:
        "On considère l taux d’extinction « normal » des espèces comme inférieur à dix espèces par an sur un million. Or, le taux actuel d’extinction planétaire serait cent à mille fois supérieur à l'échelle de la planète. Ces disparitions ont des impacts majeurs sur les écosystèmes et sur les fonctions qui ne sont plus remplies par les espèces disparues.",
      open: false,
    },
    {
      question: `Les perturbations globales du cycle de l’azote et du phosphore, c'est quoi?`,
      answer:
        "La modification des cycles de l’azote et du phosphore contenu dans les sols résulte notamment de l’agriculture et de l’élevage intensifs. L’usage d’engrais et les déjections issues de l’élevage contribuent à perturber ces cycles indispensables au bon état des sols et des eaux. La limite était déjà atteinte pour l’azote en 2009.",
      open: false,
    },
    {
      question: "À quoi fait référence la modification des usages des sols?",
      answer:
        "On considère cette limite dépassée lorsque plus de 15% de la surface de terres libres de glaces est convertie en terres agricoles.",
      open: false,
    },
    {
      question:
        "Le trou de la couche d'ozone, ça fait longteemps que c'est grave, non?",
      answer:
        "Non, cette limite n'est pas encore atteinte, même si la couche d'ozone est déjà entamée",
      open: false,
    },
    {
      question: "L'acidification des océans, c'est possible?",
      answer:
        "Malheureusement oui. Lorsque le taux moyen de saturation de l'eau de mer de surface en aragonite sera supérieur ou égal à 80% du niveau pré-industriel, cette limite sera dépassée.\nL’aragonite est un minéral composé de carbonate de calcium. Elle devient soluble dans l'océan au-delà d'une certaine acidité de l'eau (légèrement variable selon la température), c'est pourquoi elle est considérée comme un des traceurs et indicateurs de l'acidification des océans induite par les émissions anthropiques de CO2 notamment. Elle est à ce titre choisie comme variable de contrôle de l'acidification des océans par les auteurs du concept des limites planétaires en 2009",
      open: false,
    },
    {
      question: "Quelle est la différence entre un pigeon?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question: "Et l'eau?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question: "Et l'air?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question: "Toi + moi + nous + eux",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question:
        "Je prends une douche par semaine pour économiser l'eau. J'ai bon?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
  ]);

  const handleChange = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div>
      <div>
        <div className="engagement_main_dd">
          {faqs.map((faq, index) => (
            <div className="actions_main_dd">
              <div className="actions_container_dd">
                <div className="actions_engagementType_dd">{faq.question}</div>
                <div className="actions_div_dd" prout="image">
                  {faq.open === true ? (
                    <img
                      src={planetfaq}
                      alt="planet button"
                      role="presentation"
                      onClick={() => handleChange(index)}
                      onKeyPress={() => handleChange(index)}
                      className="actions_engagement_like_button_dd2"
                    />
                  ) : (
                    <img
                      src={planetfaq}
                      alt="planet button"
                      role="presentation"
                      onClick={() => handleChange(index)}
                      onKeyPress={() => handleChange(index)}
                      className="actions_engagement_like_button_dd"
                    />
                  )}
                </div>
              </div>
              <div className="actions_engagementExplanation_dd">
                {faq.open === true
                  ? faq.answer.split("\n").map((e) => (
                      <>
                        {e}
                        <br />
                      </>
                    ))
                  : ``}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
