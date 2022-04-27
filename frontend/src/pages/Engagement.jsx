import React, { useState } from "react";
import Actions from "../components/Actions";
import Filter from "../components/Filter";
import engagementData from "../datas/engagement-data";

import "./Engagement.css";

function Engagement() {
  const [value, setValue] = useState("");

  return (
    <div className="engagement_main_tg">
      <h1 className="engagement_h1_tg"> Agir maintenant </h1>
      <Filter value={value} handleValue={setValue} />
      {engagementData
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .filter((name) => name.text.includes(value))
        .map((data) => (
          <Actions data={data} />
        ))}
    </div>
  );
}

export default Engagement;
