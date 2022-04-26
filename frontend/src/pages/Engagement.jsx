import React from "react";
import Actions from "../components/Actions";
import Filter from "../components/Filter";
import engagementData from "../datas/engagement-data";

import "./Engagement.css";

function Engagement() {
  return (
    <div className="engagement_main_tg">
      <h1 className="engagement_h1_tg"> Agir maintenant </h1>
      <Filter />
      {engagementData
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .map((data) => (
          <Actions data={data} />
        ))}
    </div>
  );
}

export default Engagement;
