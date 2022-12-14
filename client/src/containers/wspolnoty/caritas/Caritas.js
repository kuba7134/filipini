import React from "react";
import { motion } from "framer-motion";
import Carousel from "../../../components/carousel/Carousel";
import { images } from "./images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Caritas = () => {
  return (
    <div className="przystan12">
      <div className="title title-top title-top-wspolnoty">
        <div className="fit-content">
          <h2>Zespół Caritas parafialna</h2>
          <div className="title-separator"></div>
        </div>
      </div>
      <motion.div
        className="space-between wspolnoty-single sakramenty-chrzest sakramenty-single"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="wspolnoty-tekst sakramenty-chrzest-tekst">
          <div className="wspolnoty-quote-box">
            <p>
              „Zespół Caritas parafialna został powołany do życia w
              naszej parafii 17 listopada 2013r., gromadząc w swoich
              szeregach osoby pragnące nieść pomoc potrzebującym,
              szczególnie w okresach:
            </p>
            <ul className="wspolnoty-quote-box-list">
              <li>
                przed Świętami Bożego narodzenia - przygotowanie
                paczek świątecznych i wydawanie ich w Sali pod
                kościołem oraz rozprowadzanie świec wigilijnych,
              </li>
              <li>
                przed Świętami Wielkanocnymi - poprzez przygotowanie
                paczek dla rodzin ubogich, włączając się w pomoc przy
                zbiórkach ofiar do puszek przed kościołem,
              </li>
              <li>
                w czasie konfliktu zbrojnego na Ukrainie - poprzez
                zbiórkę żywności, ubrań, środków higieny, środków
                medycznych i wszelkiego potrzebnego sprzętu dla
                uchodźców wojennych a także pomoc w znalezieniu
                mieszkania, szkoły czy też pracy.
              </li>
            </ul>
            <p>
              Opiekunem Zespołu Caritas jest ks. Grzegorz Chirk COr”
            </p>
            <p className="wspolnoty-quote-box-author">
              Agnieszka Szyler
            </p>
          </div>
        </div>
        <Carousel images={images} />
      </motion.div>
    </div>
  );
};
export default Caritas;
