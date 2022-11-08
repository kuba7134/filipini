import React from "react";
import "./parafia.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Kancelaria from "./kancelaria/Kancelaria";
import office from "./resources/office.png";

import rys from "./resources/clock.png";
import RysHistoryczny from "./rysHistoryczny/RysHistoryczny";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Parafia = () => {
  const content = useRef(null);
  const [parafia, setParafia] = useState("kancelaria");
  const renderSwitch = param => {
    switch (param) {
      case "kancelaria":
        return <Kancelaria key="kancelaria" />;
      case "rysHistoryczny":
        return <RysHistoryczny key="rysHistoryczny" />;
      default:
        return;
    }
  };

  return (
    <motion.div
      className="parafia"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="parafia-header header-page">
        <h1>Parafia</h1>
        <div className="sakramenty-buttons">
          <div
            onClick={() => {
              setParafia("kancelaria");
              content.current.scrollIntoView();
            }}
            className={
              parafia === "kancelaria"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={office} alt="office" />
            <p>Kancelaria</p>
          </div>

          <div
            onClick={() => {
              setParafia("rysHistoryczny");
              content.current.scrollIntoView();
            }}
            className={
              parafia === "rysHistoryczny"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img style={{ width: 100 }} src={rys} alt="clock" />
            <p>Historia</p>
          </div>
        </div>
      </div>
      <div className="parafia-container" ref={content}>
        <AnimatePresence mode="wait">
          {renderSwitch(parafia)}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Parafia;
