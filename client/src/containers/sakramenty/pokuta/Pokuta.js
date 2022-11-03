import React from "react";
import "./pokuta.css";
import konfesjonal from "../resources/konfesjonal.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Pokuta = () => {
  return (
    <motion.div
      className="sakramenty-chrzest sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-chrzest-tekst">
        <div className="title">
          <h2>Spowiedź Święta</h2>
          <div className="title-separator"></div>
        </div>
        <p>
          Spowiedź święta w tygodniu kwadrans przed poranną Mszą
          Świętą oraz w niedziele podczas każdej Mszy Świętej.
        </p>
      </div>
      <img src={konfesjonal} alt="chrzest" />
    </motion.div>
  );
};

export default Pokuta;
