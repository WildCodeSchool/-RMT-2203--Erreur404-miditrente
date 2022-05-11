import React, { useState } from "react";
import environnement from "../assets/environnement.png";
import environnementNew from "../assets/environnement_new.png";

function Actions({ data, handleLikes, totalEngagement }) {
  const [buttonActive, setButtonActive] = useState(true);
  const [whyengaged, setWhyEngaged] = useState(true);
  const [msg, setMsg] = useState("Pourquoi s'engager ?");

  const handleClick = () => {
    if (buttonActive === true) {
      handleLikes(data, "plus");
      setMsg("Merci de contribuer au sauvetage de notre planète");
    } else {
      handleLikes(data, "minus");
      setMsg("Pourquoi s'engager ?");
    }
    setButtonActive(!buttonActive);
  };

  return (
    <div className="actions_mt">
      <h6>{(100 * data.likes) / totalEngagement}% de personne sont engagés</h6>
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
                  className="actions_engagement_like_button_tg"
                />
                {data.likes}
              </div>
            ) : (
              <div className="actions_div_tg">
                <img
                  src={environnementNew}
                  alt="environnementNew"
                  className="actions_engagement_like_button_tg"
                />
                Vous et {data.likes - 1} autres personnes engagées
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
    </div>
  );
}

export default Actions;
