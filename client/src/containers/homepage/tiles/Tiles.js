import React from "react";
import "./tiles.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import herbSmall from "../resources/herb-small.png";
import bible from "../resources/bible.png";
import cup from "../resources/cup.png";
import crowd from "../resources/crowd.png";

const Tiles = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-tiles">
      <div>
        <motion.div
          onClick={() => navigate("/aktualnosci")}
          className="homepage-tile-single"
          whileHover={{ scale: 1.05 }}
        >
          <div className="homepage-tile-single-title">
            <div className="homepage-tile-single-img-box">
              <img src={bible} alt="biblia"></img>
            </div>
            <h2>AKTUALNOŚCI</h2>
          </div>
          <p>
            Tutaj znajdują się najważniejsze wiadomości z życia
            parafii. Aktualności i Słowo Boże na każdy dzień.
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div
          onClick={() => navigate("/kongregacja")}
          className="homepage-tile-single"
          whileHover={{ scale: 1.05 }}
        >
          <div className="homepage-tile-single-title">
            <div className="homepage-tile-single-img-box">
              <img src={herbSmall} alt="kongregacja-herb"></img>
            </div>
            <h2>KONGREGACJA</h2>
          </div>
          <p>
            Informacje dotyczące zgromadzenia księży Filipinów, którzy
            posługują w naszej parafii oraz w Polsce i na świecie.
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div
          onClick={() => navigate("/wspolnoty")}
          whileHover={{ scale: 1.05 }}
          className="homepage-tile-single"
        >
          <div className="homepage-tile-single-title">
            <div className="homepage-tile-single-img-box">
              <img src={crowd} alt="ludzie"></img>
            </div>
            <h2>WSPÓLNOTY</h2>
          </div>
          <p>
            Nasza parafia wspiera i pomaga w rozwoju duchowym. Poznaj
            i wybierz wspólnotę dla siebie.
          </p>
        </motion.div>
      </div>
      <div>
        <motion.div
          onClick={() => navigate("/sakramenty")}
          whileHover={{ scale: 1.05 }}
          className="homepage-tile-single"
        >
          <div className="homepage-tile-single-title">
            <div className="homepage-tile-single-img-box">
              <img src={cup} alt="kielich"></img>
            </div>
            <h2>SAKRAMENTY</h2>
          </div>
          <p>
            Sakramenty są źródłem życia chrześcijańskiego. Jesteśmy by
            służyć Tobie na drodze życia duchowego.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tiles;
