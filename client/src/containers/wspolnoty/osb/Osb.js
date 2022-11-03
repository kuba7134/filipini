import React from "react";
// import osb from "./resources/osb.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Osb = () => {
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
          <h2>Oratorium Słowa Bożego</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            „Stanowimy wspólnotę osób, które pochylają się nad Pismem
            Świętym i rozważają je zarówno podczas indywidualnej, jak
            i wspólnotowej medytacji, w duchu naszego patrona Św.
            Filipa Neri, który podobnie czynił z członkami swojego
            Oratorium. Pragniemy, aby prowadziło nas to nie tylko do
            poznania Biblii, ale także do wypełnienia Ewangelii w
            życiu codziennym. Podczas Mszy Świętych pełnimy posługę
            czytania Słowa Bożego, według ustalonych wcześniej
            dyżurów. Naszym opiekunem od tego roku duszpasterskiego
            jest ks. Piotr Stępień COr”.
          </p>
          <p className="wspolnoty-quote-box-author">
            Mirosława Łazowska
          </p>
        </div>
      </div>
      {/* <img src={osb} alt="chrzest" /> */}
    </motion.div>
  );
};

export default Osb;
