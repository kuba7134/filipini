import React from "react";
import "./kongregacja.css";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Oratorium from "./oratorium/Oratorium";
import FilipNeri from "./filipNeri/FilipNeri";
import Ksieza from "./ksieza/Ksieza";
import fneri from "./resources/fneri.jpg";
import herb from "./resources/herb-small.png";
import violin from "./resources/violin.png";
import priest from "./resources/priest.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Kongregacja = () => {
  const [kongregacja, setKongregacja] = useState("filipNeri");
  const content = useRef();
  const renderSwitch = param => {
    switch (param) {
      case "oratorium":
        return <Oratorium key="oratorium" />;
      case "filipNeri":
        return <FilipNeri key="filip" />;
      case "ksieza":
        return <Ksieza key="ksieza" />;
      default:
        return;
    }
  };

  return (
    <motion.div
      className="kongregacja"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="header-page kongregacja-header">
        <h1>Kongregacja</h1>
        <div className="sakramenty-buttons">
          <div
            onClick={() => {
              setKongregacja("filipNeri");
              content.current.scrollIntoView();
            }}
            className={
              kongregacja === "filipNeri"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img
              id="kongregacja-fneri"
              src={fneri}
              alt="Filip Neri"
            />
            <p>Filip Neri</p>
          </div>
          <div
            onClick={() => {
              setKongregacja("ksieza");
              content.current.scrollIntoView();
            }}
            className={
              kongregacja === "ksieza"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={priest} alt="chrzest" />
            <p>Księża</p>
          </div>
          <div
            onClick={() => {
              setKongregacja("oratorium");
              content.current.scrollIntoView();
            }}
            className={
              kongregacja === "oratorium"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={violin} alt="violin" />
            <p>Oratorium</p>
          </div>
          <a href="https://filipini.pl/" target="blank">
            <div className="sakramenty-button">
              <img style={{ height: 70 }} src={herb} alt="clock" />
              <p>filipini.pl</p>
            </div>
          </a>
        </div>
      </div>
      <div className="parafia-container" ref={content}>
        <AnimatePresence mode="wait">
          {renderSwitch(kongregacja)}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Kongregacja;
