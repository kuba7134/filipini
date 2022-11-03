import React from "react";
import "./oratorium.css";
import oratorium from "./resources/oratorium.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Oratorium = () => {
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
          <h2>Oratorium</h2>
          <div className="title-separator"></div>
        </div>
        <div className="wspolnoty-quote-box">
          <p style={{ fontStyle: "italic" }}>
            „Oratorium to grupa wiernych, dla których święty Filip
            pełen radości i ciągłego pragnienia nieba, stał się
            życiowym przewodnikiem. Grupa ta, której jestem dumnym
            członkiem, zbiera się w każdą niedzielę, by zaplanować
            oprawę wieczornej Mszy Świętej ostatniej szansy o godzinie
            19:30. Każdy z nas z radością wyczekuje spotkania, na
            którym wspólnie się modlimy i szlifujemy wcześniej
            zaplanowany repertuar. Staramy się, aby nasze pieśni były
            związane ze Słowem Bożym na daną niedzielę, a podczas
            liturgii zachęcały wszystkich wiernych do głoszenia Bożej
            miłości poprzez wspólny śpiew. Zwieńczeniem każdej
            niedzieli jest krótkie spotkanie po Mszy Świętej ostatniej
            szansy, gdzie wstępnie omawiane są plany na następny
            tydzień. Ponad to, włączamy się w organizację różnych
            okolicznościowych wydarzeń związanych z życiem parafii
            oraz kościoła. Bez wątpienia Oratorium dorosłych to
            wspólnota ludzi, którzy nie tylko śpiewają, organizują
            różne przedsięwzięcia, ale również wspierają się w trudach
            dnia codziennego, głosząc jednocześnie dobrą nowinę o
            zmartwychwstaniu Jezusa Chrystusa. Opiekunem Oratorium
            Dorosłych i naszym duchowym przewodnikiem, jest ks.
            proboszcz Grzegorz Chirk”.
          </p>
          <p className="wspolnoty-quote-box-author">
            Elżbieta Skrobek
          </p>
        </div>
      </div>
      <img src={oratorium} alt="chrzest" />
    </motion.div>
  );
};

export default Oratorium;
