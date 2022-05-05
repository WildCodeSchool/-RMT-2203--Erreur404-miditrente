import React, { useState } from "react";

import "../pages/Faq.css";
import planetfaq from "../assets/planetfaq.png";
/**
 *
 * @returns FAQ content
 */

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "C'est quoi une limite planétaire?",
      answer:
        "Les limites planétaires sont les seuils que l'humanité ne devrait pas dépasser pour ne pas compromettre les conditions favorables dans lesquelles elle a pu se développer et pour pouvoir durablement vivre dans un écosystème sûr, c’est-à-dire en évitant les modifications brutales et difficilement prévisibles de l'environnement planétaire. Ce concept a été proposé par une équipe internationale de vingt-six chercheurs et publié en 2009. Il a depuis été mis à jour par des publications régulières.",
      open: false,
    },
    {
      question: "Combien de limites planétaires existe-t-il?",
      answer:
        "Il existe neuf processus retenus comme limites, dont huit sont chiffrés par les chercheurs et six sont déjà franchies (la 6e a été franchie en 2022).",
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
        "A quoi ça sert d'être écolo si les autres font pas d'efforts ?",
      answer:
        "	Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Fhtagn ngs'uhn Hastur shaggyar k'yarnak, ee ngshagg shugg n'ghft sgn'wahl h'li'hee sll'ha r'luh nilgh'ri hrii nilgh'ri, shtunggli hupadgh vulgtm ulnagl li'hee goka y-lw'nafh fm'latgh throd. Ee gnaiih orr'e lloig vulgtlagln 'ai ooboshu, uln gof'nn cgotha shagg ron ch' Nyarlathotep, f'Chaugnar Faugn geb llllnyth h'shagg kadishtu. ",
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
                {faq.open === true ? faq.answer : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
