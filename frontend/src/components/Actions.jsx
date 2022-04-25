import React, { useState } from "react";

function Actions({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [buttonClass, setButtonClass] = useState("actions_bouton_tg");
  const [buttonActive, setButtonActive] = useState(true);
  const [engaged, setEngaged] = useState("Je m'engage");

  const handleClick = () => {
    setButtonActive(!buttonActive);
    if (buttonActive === true) {
      setLikes((like) => like + 1);
      setButtonClass(() => `actions_new_bouton_tg`);
      setEngaged(() => "personnes engagées");
    } else {
      setLikes((like) => like - 1);
      setButtonClass(() => `actions_bouton_tg`);
      setEngaged(() => "Je m'engage");
    }
  };

  return (
    <div className="actions_container_tg">
      <h3 className="actions_EngagementType_tg">{data.text}</h3>
      <button type="button" className={buttonClass} onClick={handleClick}>
        {engaged} <span> ♥ {likes}</span>
      </button>
    </div>
  );
}

export default Actions;
