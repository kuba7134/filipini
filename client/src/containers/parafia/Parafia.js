import React from "react";
import "./parafia.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ksieza from "./ksieza/Ksieza";
import Kancelaria from "./kancelaria/Kancelaria"
import office from "./resources/office.png"
import priest from "./resources/priest.png"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}


const Parafia = () => {
  const [parafia, setParafia] = useState("kancelaria");
  const renderSwitch = param => {
    switch (param) {
      case "kancelaria":
        return <Kancelaria key="kancelaria" />;
      case "ksieza":
        return <Ksieza key="ksieza" />;
    }
  };

  return <motion.div className="parafia"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="hidden">
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
          <p>Kancelaria</p>
        </div>
        <div
          onClick={() => {
            setParafia("ksieza");
          }}
          className="sakramenty-button"
        >
          <img src={priest} alt="chrzest" />
          <p>Księża</p>
        </div>
      </div>
    </div>
    <div className="parafia-container">
      <AnimatePresence mode="wait">{renderSwitch(parafia)}</AnimatePresence>
    </div>
  </motion.div>;
};

export default Parafia;
