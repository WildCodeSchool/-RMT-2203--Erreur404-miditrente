import React, { useState, useEffect } from "react";
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
  const [totalEngagement, setTotalEngagement] = useState(1);
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

  const handleLikes = (data, type) => {
    const updateSelection = [...selection];
    const index = updateSelection.indexOf(data);
    if (type === "plus") {
      updateSelection[index].engage = true;
      updateSelection[index].likes += 1;
    }
    if (type === "minus") {
      updateSelection[index].engage = false;
      updateSelection[index].likes -= 1;
    }
    setSelection(updateSelection);
  };

  const getTotalEngagement = () => {
    const total = selection.reduce((tot, element) => tot + element.likes, 0);
    setTotalEngagement(total);
  };
  const getEngage = () => {
    const valide = selection.filter(
      (name) => name.text.includes(value) && name.engage === true
    );
    return valide.length;
  };

  useEffect(() => {
    getTotalEngagement();
  }, [selection]);

  return (
    <div className="engagement_main_tg">
      <Helmet>
        <title> 3arth keeper | Agir </title>
      </Helmet>
      <h1 className="engagement_h1_tg">
        Agir <span>maintenant</span>{" "}
      </h1>
      <h3> Votre niveau engagement actuel : </h3>
      <h6>{Math.round((100 * getEngage()) / selection.length)} %</h6>
      <Button categories={categories} handleClick={handleClick} />
      <Filter value={value} handleValue={setValue} />
      {selection
        .filter((name) => name.text.includes(value))
        .sort((a, b) => {
          return b.likes - a.likes;
        })
        .map((data) => (
          <Actions
            key={data.id}
            totalEngagement={totalEngagement}
            data={data}
            handleLikes={handleLikes}
          />
        ))}
      );
      {value === "midiTrente" ? <EasterEgg /> : ""}
    </div>
  );
}

export default Engagement;
