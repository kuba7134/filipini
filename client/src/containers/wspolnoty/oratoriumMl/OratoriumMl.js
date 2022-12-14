import React from "react";
// import oratoriumMl from "./resources/oratoriumMl.jpg";
import { motion } from "framer-motion";
import Carousel from "../../../components/carousel/Carousel";
import { images } from "./images";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const OratoriumMl = () => {
  return (
    <div className="przystan12">
      <div className="title title-top title-top-wspolnoty">
        <div className="fit-content">
          <h2>Oratorium Młodych</h2>
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
              „Jednym z ważniejszych obszarów, w których nasza
              Kongregacja prowadzi swoje zaangażowanie duszpasterskie
              jest szeroko pojęta praca z młodzieżą. Zgodnie z
              charyzmatem Św. Filipa Neri staramy się gromadzić
              młodzież licealną i studencką na spotkaniach
              wypełnionych wspólną modlitwą, radosnym dzieleniem się
              życiem oraz organizacją inicjatyw wspólnotowych. Do
              najważniejszych należą:
            </p>
            <ul className="wspolnoty-quote-box-list">
              <li>
                oprawa muzyczna i liturgiczna „Mszy Świętej Ostatniej
                Szansy”, odbywającej się w każdą niedzielę o godz.
                19:30,
              </li>
              <li>
                zaangażowanie w inicjatywę Pól Nadziei, uczulających
                na potrzeby osób starszych i chorych,
              </li>
              <li>
                włączenie się w liczne akcje informacyjne i
                charytatywne towarzyszące powstaniu Hospicjum
                Stacjonarnego w Tomaszowie Maz.,
              </li>
              <li>
                zbiórki żywności, ubrań i potrzebnego sprzętu dla
                uchodźców wojennych i wszystkich potrzebujących,
              </li>
              <li>
                współorganizacja comiesięcznych Wieczorów Uwielbienia
                wraz z „Przystanią Dwunastu”.
              </li>
            </ul>
            <p>
              Opiekunem Oratorium Młodych jest ks. Grzegorz Chirk
              COr”.
            </p>
            <p className="wspolnoty-quote-box-author">
              Rafał & Mateusz Szydłowscy
            </p>
          </div>
        </div>
        <Carousel images={images} />
      </motion.div>
    </div>
  );
};

export default OratoriumMl;
