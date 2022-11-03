import React from "react";
// import gma from "./resources/gma.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Gma = () => {
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
          <h2>Grupa modlitewno - adoracyjna</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            „Spotykamy się dwa razy w tygodniu: w poniedziałki na
            godzinę adoracji, jak również raz w miesiącu na Mszę
            Świętą ku czci Ducha Świętego. W każdy czwartek odbywa się
            adoracja Najświętszego Sakramentu od godzinny 22:00 do
            7:00. Grupa liczy 20 osób. Opiekunem jest ks. Sławomir
            Bogus COr”.
          </p>
          <p className="wspolnoty-quote-box-author">
            Sebastian Oleksik
          </p>
        </div>
      </div>
      {/* <img src={gma} alt="chrzest" /> */}
    </motion.div>
  );
};

export default Gma;
