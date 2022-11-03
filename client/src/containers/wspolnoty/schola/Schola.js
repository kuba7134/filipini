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
          <h2>Stowarzyszenie Abstynenckie „schola”</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p>
            „Stowarzyszenie Abstynenckie „schola” istnieje od 1997.
            Siedziba przy Kościele Św. Rodziny funkcjonuje od kwietnia
            2018 roku. Podstawową formą naszego działania są zajęcia
            mityngowe i terapie dla osób uzależnionych oraz ich
            rodzin. W naszym stowarzyszeniu prowadzimy:
          </p>
          <ul>
            <li>codzienne spotkania w klubie</li>
            <li>konsultacje dla osób z problemem alkoholowym</li>
            <li>terapie ze specjalistą terapii uzależnień</li>
          </ul>
          <p>
            W razie potrzeby wsparcia kogoś w sposób duchowy i
            religijny, wspomagamy się również wsparciem i pomocą
            księży z naszej parafii. Obok wsparcia i terapii
            proponujemy aktywne i twórcze spędzenie wolnego czasu,
            proponujemy trzeźwy styl życia poprzez sport, rekreację i
            ruch na świeżym powietrzu. Organizujemy również zabawy
            abstynenckie, biwaki, wycieczki i pikniki rodzinne.
            Promujemy aktywne, twórcze formy spędzania wolnego czasu
            oraz ukazujemy, jak można żyć bez alkoholu i używek”.{" "}
          </p>
          <p className="wspolnoty-quote-box-author">Bogumiła Juda</p>
        </div>
      </div>
      <img src={schola} alt="chrzest" />
    </motion.div>
  );
};
export default Schola;
