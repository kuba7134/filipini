import React from "react";
import "./domowyKosciol.css";
// import domowyKosciol from "./resources/domowyKosciol.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const DomowyKosciol = () => {
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
          <h2>Domowy Kościół</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            „Kapłani naszej Kongregacji współpracują z Domowym
            Kościołem Ruchu Światło-Życie asystując w comiesięcznych
            spotkaniach formacyjnych kręgów Domowego Kościoła. Rodziny
            będące członkami tychże kręgów częściowo są z naszej
            parafii, a częściowo kręgi te mają charakter między
            parafialny. Adekwatnie jednak do charyzmatu Ruchu
            Światło-Życie poszczególni członkowie kręgów pozostających
            pod opieką naszych duszpasterzy angażują się w inicjatywy
            duszpasterskie naszej wspólnoty parafialnej, między innymi
            współprowadzenie nowenny do Matki Bożej Rozwiązującej
            Węzły a dwóch mężczyzn - członków Domowego Kościoła -
            pełni u nas posługę nadzwyczajnych szafarzy Komunii
            Świętej.
          </p>
          <p>Opiekunami kręgów są: </p>
          <ul className="wspolnoty-quote-box-list">
            <li>ks. Sławomir Bogusz COr,</li>
            <li>ks. Grzegorz Chirk COr”</li>
          </ul>
          <p className="wspolnoty-quote-box-author">
            Jolanta Błaszczyk
          </p>
        </div>
      </div>
      {/* <img src={domowyKosciol} alt="chrzest" /> */}
    </motion.div>
  );
};
export default DomowyKosciol;
