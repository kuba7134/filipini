import React from "react";
// import ministrant from "./resources/ministrant.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Ministrant = () => {
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
          <h2>Liturgiczna Służba Ołtarza</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            „Jesteśmy grupą ministrantów, lektorów i nadzwyczajnych
            szafarzy Komunii Świętej. Stanowimy wspólnotę modlitwy,
            formacji i posługi, która ukierunkowana jest na służbę
            Bożą przy chrystusowym ołtarzu. Pragniemy nie tylko
            poprzez przygotowanie liturgii nabożeństw i mszy świętych,
            ale także przez godziwe i chrześcijańskie życie dawać
            świadectwo naszej wiary w Jezusa Chrystusa. Po okresie
            pandemii staramy się odbudować nasze struktury i wzmocnić
            swój udział w życiu parafialnym. Naszym opiekunem od tego
            roku szkolnego i katechetycznego jest ks. Piotr Stępień”.
          </p>
          <p className="wspolnoty-quote-box-author">
            Piotr Błaszczyk
          </p>
        </div>
      </div>
      {/* <img src={ministrant} alt="chrzest" /> */}
    </motion.div>
  );
};

export default Ministrant;
