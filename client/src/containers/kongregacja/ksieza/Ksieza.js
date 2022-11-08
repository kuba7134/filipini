import React from "react";
import { motion } from "framer-motion";
import "./ksieza.css";
import chirk from "../resources/chirk.jpg";
import bogusz from "../resources/bogusz.jpg";
import stepien from "../resources/stepien.jpg";
import wojtunik from "../resources/wojtunik.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ksieza = () => {
  return (
    <motion.div
      className="ksieza"
      key="ksieza"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="ksieza-single">
        <img src={chirk} alt="ks. Grzegorz Chirk" />
        <h3>
          ks. Grzegorz Chirk COr
          <br /> - Superior i Proboszcz
        </h3>
      </div>
      <div className="ksieza-single">
        <img src={wojtunik} alt="ks. Wacław Wojtunik" />
        <h3>ks. Wacław Wojtunik COr</h3>
      </div>
      <div className="ksieza-single">
        <img src={bogusz} alt="ks. Sławomir Bogusz" />
        <h3>ks. Sławomir Bogusz COr</h3>
      </div>
      <div className="ksieza-single">
        <img src={stepien} alt="ks. Piotr Stępień" />
        <h3>ks. Piotr Stępień COr</h3>
      </div>
    </motion.div>
  );
};

export default ksieza;
