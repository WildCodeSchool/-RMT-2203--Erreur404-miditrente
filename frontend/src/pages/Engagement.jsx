import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Actions from "../components/Actions";
import Filter from "../components/Filter";
import EasterEgg from "../components/EasterEgg";
import engagementData from "../datas/engagement-data";
import Button from "../components/Button";

import "./Engagement.css";

function Engagement() {
  const [value, setValue] = useState("");
  const [selection, setSelection] = useState(engagementData);
  const categories = ["Tous", "Facile", "Intermediaire", "Expert"];
  const handleClick = (button) => {
    if (button === "Tous") {
      setSelection(engagementData);
      return;
    }
    const filteredData = engagementData.filter(
      (data) => data.category === button
    );
    setSelection(filteredData);
  };

  return (
    <div className="engagement_main_tg">
      <Helmet>
        <title> 3arth keeper | Agir </title>
      </Helmet>
      <h1 className="engagement_h1_tg">
        Agir <span>maintenant</span>{" "}
      </h1>
      <h3> Vos engagements :</h3>
      <Button categories={categories} handleClick={handleClick} />
      <Filter value={value} handleValue={setValue} />
      {selection
        .filter((name) => name.text.includes(value))
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .map((data) => (
          <Actions data={data} />
        ))}
      );
      {value === "midiTrente" ? <EasterEgg /> : ""}
    </div>
  );
}

export default Engagement;
