import React, { useState } from "react";

function Actions({ data }) {
  const [likes, setLikes] = useState(data.likes);
  const [buttonClass, setButtonClass] = useState("actions_bouton_tg");

  const handleClick = () => {
    setLikes((like) => like + 1);
    setButtonClass(() => `actions_new_bouton_tg`);
  };

  return (
    <div className="actions_container_tg">
      <h3 className="actions_EngagementType_tg">{data.text}</h3>
      <button type="button" className={buttonClass} onClick={handleClick}>
        Je m&apos;engage <span> ♥ {likes}</span>
      </button>
    </div>
  );
}

export default Actions;
