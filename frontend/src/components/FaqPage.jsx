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
      answer:
        "Il existe neuf processus retenus comme limites, dont six sont déjà franchies:\n🔴 le changement climatique\n🔴 l’érosion de la biodiversité\n🔴 les perturbations globales du cycle de l’azote et du phosphore\n🔴 l’usage des sols\n🟢 l’acidification des océans\n🟢 la déplétion de la couche d’ozone\n🟢 les aérosols atmosphériques\n🔴 l’usage de l’eau douce (dernière limite franchie en 2022)\n🔴 les pollutions chimiques",
      open: false,
    },
    {
      question: "Quelles limites sont déjà atteintes ?",
      answer:
        "🔴 le changement climatique :\nconcentration atmosphérique en CO2 inférieure à 350 ppm et/ou une variation maximale de +1 W/m2 du forçage radiatif.\n🔴 l’érosion de la biodiversité :\ntaux d’extinction « normal » des espèces inférieur à dix espèces par an sur un million. Or, le taux actuel d’extinction planétaire serait cent à mille fois supérieur à l'échelle de la planète. Ces disparitions ont des impacts majeurs sur les écosystèmes et sur les fonctions qui ne sont plus remplies par les espèces disparues.\n🔴 les perturbations globales du cycle de l’azote et du phosphore :\n limite à la fixation industrielle et agricole de N2 à 35 Tg/an et apport annuel de phosphore aux océans inférieur à 10 fois le lessivage naturel du phosphore. La modification des cycles de l’azote et du phosphore contenu dans les sols résulte notamment de l’agriculture et de l’élevage intensifs. L’usage d’engrais et les déjections issues de l’élevage contribuent à perturber ces cycles indispensables au bon état des sols et des eaux. La limite était déjà atteinte pour l’azote en 2009.\n4: Modifications des usages des sols : maximum de 15 % de la surface de terres libres de glaces convertie en terres agricoles.\n🔴 l’usage de l’eau douce :\ninférieure à 4 000 km3/an de consommation des ressources en eaux de ruissellement.\n6: Diminution de la couche d'ozone stratosphérique :\nréduction inférieure à 5 % dans la concentration en ozone par rapport au niveau pré-industriel de 290 unités Dobson.\n7: Acidification des océans :\ntaux moyen de saturation de l'eau de mer de surface en aragonite supérieur ou égal à 80 % du niveau pré-industriel.\n\nDeux limites ne peuvent pas encore être quantifiées, par manque de données :\n🔴 les pollutions chimiques.\n9: Concentration des aérosols atmosphériques.",
      open: false,
    },
    {
      question: `C'est quoi le "jour du dépassement"?`,
      answer: `Le jour du dépassement de la Terre (en anglais : Earth Overshoot Day) correspond à la date de l’année, calculée par l'ONG américaine Global Footprint Network, à partir de laquelle l’humanité est supposée avoir consommé l’ensemble des ressources que la planète est capable de régénérer en un an. Passée cette date, l’humanité puiserait donc de manière irréversible dans les réserves "non renouvelables" (à échelle de temps humaine) de la Terre. En 2021, l'ONG a estimé cette date au 29 juillet.
      La date peut aussi être calculée par pays. En France, elle a été atteinte le 5 mai 2021. Cela signifie globalement qu'à ce rythme, la France aurait besoinde de 2,9 Terre(s) pour subvenir à ses besoins de l'année.`,
      open: false,
    },
    {
      question:
        "Oui mais, la banquise, elle se reconstruit l'hiver avec le froid... non?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question: `C'est quoi le "continent de plastique"`,
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
    {
      question:
        "J'ai voté écolo aux dernières élections, est-ce que ça va suffire?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
      open: false,
    },
    {
      question:
        "J'ai écrit des questions au hasard, est-ce que vous allez vous en rendre compte?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
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
