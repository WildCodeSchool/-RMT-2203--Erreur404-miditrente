import React, { useState } from "react";
import environnement from "../assets/environnement.png";
import environnementNew from "../assets/environnement_new.png";

function Actions({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [buttonActive, setButtonActive] = useState(true);
  const [whyengaged, setWhyEngaged] = useState(true);
  const [msg, setMsg] = useState("Pourquoi s'engager ?");

  const handleClick = () => {
    if (buttonActive === true) {
      setLikes((like) => like + 1);
      setMsg("Merci de contribuer au sauvetage de notre planète");
    } else {
      setLikes((like) => like - 1);
      setMsg("Pourquoi s'engager ?");
    }
    setButtonActive(!buttonActive);
  };

  return (
    <div className={buttonActive ? "actions_main_tg" : "actions_new_main_tg"}>
      <section className="actions_container_tg">
        <h3 className="actions_engagementType_tg">{data.text}</h3>
        <button
          type="button"
          className={
            buttonActive ? "actions_bouton_tg" : "actions_new_bouton_tg"
          }
          onClick={handleClick}
        >
          {buttonActive ? (
            <div className="actions_div_tg">
              <img
                src={environnement}
                alt="environnement"
                className="actions_likeButton_tg"
              />
              <p className="actions_bouton_p_tg">{likes} personnes engagées </p>
            </div>
          ) : (
            <div className="actions_div_tg">
              <img
                src={environnementNew}
                alt="environnementNew"
                className="actions_likeButton_tg"
              />
              <p className="actions_bouton_p_tg">
                Vous et {likes - 1} autres personnes engagées
              </p>
            </div>
          )}
        </button>
      </section>
      <button
        type="button"
        className="actions_engagementExplanation_tg"
        onClick={() => setWhyEngaged(!whyengaged)}
      >
        {whyengaged ? msg : data.explication}
      </button>
    </div>
  );
}

export default Actions;
