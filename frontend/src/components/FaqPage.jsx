import React, { useState } from "react";
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
  ]);

  const handleChange = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div>
      <div>
        <div>
          {faqs.map((faq, index) => (
            // <div>
            // </div> nouvelle div: display flex pour la colonne à côté de l'image
            <div
              style={{
                backgroundColor: "white",
                color: "crimson",
                marginBottom: "10px",
              }}
            >
              <div
                role="presentation"
                onClick={() => handleChange(index)}
                onKeyPress={() => handleChange(index)}
              >
                {faq.question}
              </div>
              <div>{faq.open === true ? faq.answer : ""}</div>
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
