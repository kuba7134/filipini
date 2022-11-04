import React from "react";
import "./schola.css";
import schola from "./resources/schola.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Schola = () => {
  return (
    <motion.div
      className="wspolnoty-single sakramenty-chrzest sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-chrzest-tekst">
        <div className="title">
          <h2>Schola dziecięca</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            Schola dziecięca została założona w 2014 r. (we wrześniu)
            przez Annę Niewiadomską, nauczycielkę muzyki i naszą
            Organistkę. Próby śpiewu odbywają się w każdą niedzielę o
            godzinie 10:00, natomiast o godzinie 11:00 dzieci
            ubogacają swoim śpiewem Mszę Świętą. Podstawowym zadaniem
            scholki jest muzyczna oprawa niedzielnych i świątecznych
            mszy świętych oraz innych, ważnych wydarzeń np. podczas
            uroczystości I komunii świętej. Na spotkaniach dzieci uczą
            się nie tylko pięknie śpiewać, ale pogłębiają też swoją
            świadomość liturgiczną. Zapraszamy do wspólnej modlitwy
            poprzez śpiew, bo kto śpiewa ten dwa razy się modli.
          </p>
        </div>
      </div>
      <img src={schola} alt="chrzest" />
    </motion.div>
  );
};
export default Schola;
