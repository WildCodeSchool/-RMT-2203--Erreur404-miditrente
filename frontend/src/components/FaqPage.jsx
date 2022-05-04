import React, { useState } from "react";

import "../pages/Engagement.css";
// import planetfaq from "../assets/planetfaq.png";
/**
 *
 * @returns FAQ content
 */

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question: "question 1",
      answer: "réponse 1",
      open: true,
    },
    {
      question: "question 2",
      answer: "réponse 2",
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
        <div className="engagement_main_tg">
          {faqs.map((faq, index) => (
            // <div>
            // </div> nouvelle div: display flex pour la colonne à côté de l'image
            // ajouter un pointeur sur les boutons
            <div
              className="actions_container_tg"

              // style={{
              //   backgroundColor: "white",
              //   color: "crimson",
              //   marginBottom: "10px",
              // }}
            >
              <div
                className="actions_engagementType_tg"
                role="presentation"
                onClick={() => handleChange(index)}
                onKeyPress={() => handleChange(index)}
              >
                {faq.question}
              </div>
              <div className="actions_engagementExplanation_tg">
                {faq.open === true ? faq.answer : ""}
              </div>
            </div>
            // image avec le onclick, 2 images en ternaire
            // fin div
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
