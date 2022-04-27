import React, { useState } from "react";

function Actions({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [buttonClass, setButtonClass] = useState("actions_bouton_tg");
  const [buttonActive, setButtonActive] = useState(true);
  const [engaged, setEngaged] = useState("Je m'engage");
  const [whyengaged, setWhyEngaged] = useState("Pourquoi s'engager ?");
  const [engagedActive, setEngagedActive] = useState(true);
  const [engagedClass, setEngagedClass] = useState("actions_main_tg");

  const handleClick = () => {
    setButtonActive(!buttonActive);
    if (buttonActive === true) {
      setLikes((like) => like + 1);
      setButtonClass(() => `actions_new_bouton_tg`);
      setEngaged(() => "personnes engagées");
      setWhyEngaged(() => "Merci de contribuer au sauvetage de notre planète");
    } else {
      setLikes((like) => like - 1);
      setButtonClass(() => `actions_bouton_tg`);
      setEngaged(() => "Je m'engage");
      setWhyEngaged(() => "Pourquoi s'engager ?");
    }
  };

  const handleClickWhy = () => {
    setEngagedActive(!engagedActive);
    if (engagedActive === true) {
      setWhyEngaged(() => data.explication);
      setEngagedClass(() => "actions_new_main_tg");
    } else {
      setWhyEngaged(() => "Pourquoi s'engager ?");
      setEngagedClass(() => "actions_main_tg");
    }
  };

  return (
    <div className={engagedClass}>
      <section className="actions_container_tg">
        <h3 className="actions_engagementType_tg">{data.text}</h3>
        <button type="button" className={buttonClass} onClick={handleClick}>
          {engaged} <span> ♥ {likes}</span>
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
