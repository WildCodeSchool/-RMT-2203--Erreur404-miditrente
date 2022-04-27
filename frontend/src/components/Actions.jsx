import React, { useState } from "react";

function Actions({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [buttonActive, setButtonActive] = useState(true);
  const [whyengaged, setWhyEngaged] = useState("Pourquoi s'engager ?");

  const handleClickWhy = () => {
    if (!buttonActive && whyengaged === data.explication) {
      setWhyEngaged("Merci de contribuer au sauvetage de notre planète");
    } else if (buttonActive && whyengaged === data.explication) {
      setWhyEngaged("Pourquoi s'engager ?");
    } else {
      setWhyEngaged(data.explication);
    }
  };

  const handleClick = () => {
    setButtonActive(!buttonActive);
    if (buttonActive === true) {
      setLikes((like) => like + 1);
      setWhyEngaged("Merci de contribuer au sauvetage de notre planète");
    } else {
      setLikes((like) => like - 1);
      setWhyEngaged("Pourquoi s'engager ?");
    }
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
          {buttonActive ? "personnes engagées" : "Je m'engage"}
          <span> ♥ {likes}</span>
        </button>
      </section>
      <button
        type="button"
        className="actions_engagementExplanation_tg"
        onClick={handleClickWhy}
      >
        {whyengaged}
      </button>
    </div>
  );
}

export default Actions;
