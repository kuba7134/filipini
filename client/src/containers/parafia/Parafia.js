import React from "react";
import "./parafia.css";
import { useState } from "react";
import Ksieza from "./ksieza/Ksieza";
import Kancelaria from "./kancelaria/Kancelaria"
import office from "./resources/office.png"
import priest from "./resources/priest.png"


const Parafia = () => {
  const [parafia, setParafia] = useState("kancelaria");
  const renderSwitch = param => {
    switch (param) {
      case "kancelaria":
        return <Kancelaria />;
      case "ksieza":
        return <Ksieza />;
    }
  };

  return <div className="parafia">
    <div className="parafia-header header-page">
      <h1>Parafia</h1>
      <div className="sakramenty-buttons">
        <div
          onClick={() => {
            setParafia("kancelaria");
          }}
          className="sakramenty-button"
        >
          <img src={office} alt="rings" />
          <h2>Kancelaria</h2>
        </div>
        <div
          onClick={() => {
            setParafia("ksieza");
          }}
          className="sakramenty-button"
        >
          <img src={priest} alt="chrzest" />
          <h2>Księża</h2>
        </div>
      </div>
    </div>
    <div className="parafia-container">
      {renderSwitch(parafia)}
    </div>
  </div>;
};

export default Parafia;
