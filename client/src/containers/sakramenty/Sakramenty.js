import React from "react";
import "./sakramenty.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chrzest from "./chrzest/Chrzest";
import Slub from "./slub/Slub";
import Pokuta from "./pokuta/Pokuta";
import drop from "./resources/drop.png";
import konfesjonal from "./resources/konfesjonal.png";
import rings from "./resources/rings.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Sakramenty = () => {
  const content = useRef(null);
  const [sakrament, setSakrament] = useState("chrzest");
  const renderSwitch = param => {
    switch (param) {
      case "chrzest":
        return <Chrzest key="chrzest" />;
      case "slub":
        return <Slub key="slub" />;
      case "pokuta":
        return <Pokuta key="pokuta" />;
      default:
    }
  };

  return (
    <motion.div
      className="sakramenty"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-header">
        <h1>Sakramenty</h1>
        <div className="sakramenty-buttons">
          <div
            onClick={() => {
              setSakrament("chrzest");
              content.current.scrollIntoView();
            }}
            className={
              sakrament === "chrzest"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={drop} alt="chrzest" />
            <p>Chrzest</p>
          </div>
          <div
            onClick={() => {
              setSakrament("slub");
              content.current.scrollIntoView();
            }}
            className={
              sakrament === "slub"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={rings} alt="rings" />
            <p>Ślub</p>
          </div>
          <div
            onClick={() => {
              setSakrament("pokuta");
              content.current.scrollIntoView();
            }}
            className={
              sakrament === "pokuta"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={konfesjonal} alt="rings" />
            <p>Spowiedź święta</p>
          </div>
        </div>
      </div>
      <div className="sakramenty-content" ref={content}>
        <AnimatePresence mode="wait">
          {renderSwitch(sakrament)}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Sakramenty;
