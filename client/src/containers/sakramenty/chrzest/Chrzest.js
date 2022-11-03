import React from "react";
import "./chrzest.css";
import chrzest from "../resources/chrzest.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Chrzest = () => {
  return (
    <motion.div className="sakramenty-chrzest sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      <div className="sakramenty-chrzest-tekst">
        <div className="title">
          <h2>Chrzest</h2>
          <div className="title-separator"></div>
        </div>
        <p>
          Sakramentu chrztu św. udzielamy w naszej parafii w każdą pierwszą i
          trzecią niedzielę miesiąca. Do kancelarii parafialnej należy się
          zgłosić w tygodniu poprzedzającym chrzest. Rodzice chrzestni będący
          spoza naszej parafii powinni dostarczyć zaświadczenie, że mogą pełnić
          taką funkcję. Do kancelarii parafialnej należy dostarczyć akt
          urodzenia dziecka wydany przez USC. Świecę i chustę do chrztu św.
          Dla owocnego przeżycia chrztu
          dziecka rodzice i rodzice chrzestni przystępują do sakramentu pokuty
          otrzymując odpowiednią kartkę do podpisu przez szafarza sakramentu
          pojednania.
        </p>
      </div>
      <img src={chrzest} alt="chrzest" />
    </motion.div>
  );
};

export default Chrzest;
