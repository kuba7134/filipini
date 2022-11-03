import React, { useState } from "react";
import "./wspolnoty.css";
import { motion, AnimatePresence } from "framer-motion";
import Azyl from "./azyl/Azyl";
import Caritas from "./caritas/Caritas";
import DomowyKosciol from "./domowyKosciol/DomowyKosciol";
import Oratorium from "./oratorium/Oratorium";
import OratoriumMl from "./oratoriumMl/OratoriumMl";
import Schola from "./schola/Schola";
import Ministrant from "./ministrant/Ministrant";
import Gma from "./gma/Gma";
import Osb from "./osb/Osb";
import azyl from "./resources/azyl.png";
import caritas from "./resources/caritas.png";
import dom from "./resources/dom.png";
import oratorium from "./resources/oratorium.png";
import schola from "./resources/schola.png";
import ministrant from "./resources/ministrant.png";
import pray from "./resources/pray.png";
import bible from "./resources/bible.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Wspolnoty = () => {
  const [wspolnoty, setWspolnoty] = useState("oratoriumMl");
  const renderSwitch = param => {
    switch (param) {
      case "azyl":
        return <Azyl key="azyl" />;
      case "caritas":
        return <Caritas key="ksieza" />;
      case "domowyKosciol":
        return <DomowyKosciol key="domowyKosciol" />;
      case "oratorium":
        return <Oratorium key="oratorium" />;
      case "oratoriumMl":
        return <OratoriumMl key="oratoriumMl" />;
      case "schola":
        return <Schola key="schola" />;
      case "ministrant":
        return <Ministrant key="ministrant" />;
      case "osb":
        return <Osb key="osb" />;
      case "gma":
        return <Gma key="gma" />;
      default:
        return;
    }
  };
  return (
    <motion.div
      className="wspolnoty"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="wspolnoty-header header-page">
        <h1>Wspólnoty</h1>
        <div className="sakramenty-buttons">
          <div
            onClick={() => {
              setWspolnoty("azyl");
            }}
            className={
              wspolnoty === "azyl"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={azyl} alt="azyl" />
            <p>Stowarzyszenie abstynenckie "AZYL"</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("caritas");
            }}
            className={
              wspolnoty === "caritas"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={caritas} alt="caritas" />
            <p>Zespół Caritas parafialna</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("domowyKosciol");
            }}
            className={
              wspolnoty === "domowyKosciol"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={dom} alt="clock" />
            <p>Domowy Kośćiół</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("gma");
            }}
            className={
              wspolnoty === "gma"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={pray} alt="modlitwa" />
            <p>Grupa modlitewno - adoracyjna</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("ministrant");
            }}
            className={
              wspolnoty === "ministrant"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={ministrant} alt="modlitwa" />
            <p>Liturgiczna Służba Ołtarza</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("oratorium");
            }}
            className={
              wspolnoty === "oratorium"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={oratorium} alt="oratorium" />
            <p>Oratorium</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("oratoriumMl");
            }}
            className={
              wspolnoty === "oratoriumMl"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={oratorium} alt="piano" />
            <p>Oratorium Młodych</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("osb");
            }}
            className={
              wspolnoty === "osb"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={bible} alt="piano" />
            <p>Oratorium Słowa Bożego</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("schola");
            }}
            className={
              wspolnoty === "schola"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={schola} alt="clock" />
            <p>Schola dziecięca</p>
          </div>
        </div>
      </div>
      <div className="parafia-container">
        <AnimatePresence mode="wait">
          {renderSwitch(wspolnoty)}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Wspolnoty;
