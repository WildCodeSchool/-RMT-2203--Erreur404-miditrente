import React from "react";

function Actions({ data }) {
  return (
    <div className="actions_container_tg">
      <h3 className="actions_EngagementType_tg">{data.text}</h3>
      <h3 className="actions_bouton_tg">
        Je m&apos;engage <span> ♥ {data.likes}</span>
      </h3>
    </div>
  );
}

export default Actions;
