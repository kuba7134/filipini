import React from "react";
import "./sakramenty.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Chrzest from "./chrzest/Chrzest";
import Slub from "./slub/Slub";
import drop from "./resources/drop.png";
import konfesjonal from "./resources/konfesjonal.png";
import rings from "./resources/rings.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

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
    <motion.div className="sakramenty"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
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
            <p>Chrzest</p>
          </div>
          <div
            onClick={() => {
              setSakrament("slub");
            }}
            className="sakramenty-button"
          >
            <img src={rings} alt="rings" />
            <p>Ślub</p>
          </div>
          <div
            onClick={() => {
              setSakrament("pokuta");
            }}
            className="sakramenty-button"
          >
            <img src={konfesjonal} alt="rings" />
            <p>Pokuta</p>
          </div>
        </div>
      </div>
      <div className="sakramenty-content">{renderSwitch(sakrament)}</div>
    </motion.div>
  );
};

export default Sakramenty;
