import React, { useState, useRef } from "react";
import "./wspolnoty.css";
import { motion, AnimatePresence } from "framer-motion";
import Azyl from "./azyl/Azyl";
import Caritas from "./caritas/Caritas";
import DomowyKosciol from "./domowyKosciol/DomowyKosciol";
import Oratorium from "./oratorium/Oratorium";
import OratoriumMl from "./oratoriumMl/OratoriumMl";
import Schola from "./schola/Schola";
import Ministrant from "./ministrant/Ministrant";
import Przystan12 from "./przystan12/Przystan12";
import Gma from "./gma/Gma";
import Osb from "./osb/Osb";
import Rozaniec from "./rozaniec/Rozaniec";
import azyl from "./resources/azyl.png";
import caritas from "./resources/caritas.png";
import dom from "./resources/dom.png";
import oratorium from "./resources/oratorium.png";
import oratoriumMl from "./resources/oratoriumMl.png";
import schola from "./resources/schola.png";
import ministrant from "./resources/ministrant.png";
import pray from "./resources/pray.png";
import bible from "./resources/bible.png";
import przystan12 from "./resources/przystan12.png";
import rozaniec from "./resources/rosary.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Wspolnoty = () => {
  const content = useRef(null);
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
      case "przystan12":
        return <Przystan12 key="przystan12" />;
      case "rozaniec":
        return <Rozaniec key="rozaniec" />;
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
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
              content.current.scrollIntoView();
            }}
            className={
              wspolnoty === "oratoriumMl"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={oratoriumMl} alt="piano" />
            <p>Oratorium Młodych</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("osb");
              content.current.scrollIntoView();
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
              setWspolnoty("przystan12");
              content.current.scrollIntoView();
            }}
            className={
              wspolnoty === "przystan12"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={przystan12} alt="przystan12" />
            <p>Przystań Dwunastu</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("rozaniec");
              content.current.scrollIntoView();
            }}
            className={
              wspolnoty === "rozaniec"
                ? "sakramenty-button sakramenty-button-active"
                : "sakramenty-button"
            }
          >
            <img src={rozaniec} alt="rozaniec" />
            <p>Kółka Różańcowe</p>
          </div>
          <div
            onClick={() => {
              setWspolnoty("schola");
              content.current.scrollIntoView();
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
      <div className="parafia-container" ref={content}>
        <AnimatePresence mode="wait">
          {renderSwitch(wspolnoty)}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Wspolnoty;
