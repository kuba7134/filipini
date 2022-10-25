import React from "react";
import "./sakramenty.css";
import { useState } from "react";
import Chrzest from "./chrzest/Chrzest";
import Slub from "./slub/Slub";
import drop from "./resources/drop.png";
import konfesjonal from "./resources/konfesjonal.png";
import rings from "./resources/rings.png";

const Sakramenty = () => {
  const [sakrament, setSakrament] = useState("chrzest");
  const renderSwitch = param => {
    switch (param) {
      case "chrzest":
        return <Chrzest />;
      case "slub":
        return <Slub />;
    }
  };

  return (
    <div className="sakramenty">
      <div className="sakramenty-header">
        <h1>Sakramenty</h1>
        <div className="sakramenty-buttons">
          <div
            onClick={() => {
              setSakrament("chrzest");
            }}
            className="sakramenty-button"
          >
            <img src={drop} alt="chrzest" />
            <h2>Chrzest</h2>
          </div>
          <div
            onClick={() => {
              setSakrament("slub");
            }}
            className="sakramenty-button"
          >
            <img src={rings} alt="rings" />
            <h2>Ślub</h2>
          </div>
          <div
            onClick={() => {
              setSakrament("pokuta");
            }}
            className="sakramenty-button"
          >
            <img src={konfesjonal} alt="rings" />
            <h2>Pokuta</h2>
          </div>
        </div>
      </div>
      <div className="sakramenty-content">{renderSwitch(sakrament)}</div>
    </div>
  );
};

export default Sakramenty;
