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
      question: "question 3",
      answer: "réponse 3",
      open: false,
    },
    {
      question: "question 4",
      answer: "réponse 4",
      open: false,
    },
    {
      question: "question 5",
      answer: "réponse 5",
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
