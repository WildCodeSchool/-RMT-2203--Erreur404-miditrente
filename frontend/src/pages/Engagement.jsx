import React from "react";
import Actions from "../components/Actions";
import engagementData from "../datas/engagement-data";

import "./Engagement.css";

function Engagement() {
  // const [dataTable, setDataTable] = useState(engagementData);

  return (
    <div className="engagement_main_tg">
      <h1 className="engagement_h1_tg"> Agir maintenant </h1>
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
