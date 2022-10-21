import React from "react";
import "./tiles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tiles = () => {
  return (
    <div className="homepage-tiles">
      <Link to="/aktualnosci">
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="homepage-tile-single">
            <div className="homepage-tile-single-title">
              <div className="homepage-tile-single-img-box">
                <img src="pics/icons/book.png"></img>
              </div>
              <h2>AKTUALNOŚCI</h2>
            </div>
            <p>
              Tutaj znajdują się najważniejsze wiadomości z życia naszej
              parafii. Nowości i aktualności oraz Słowo Boże.
            </p>
          </div>
        </motion.div>
      </Link>
      <Link to="/parafia">
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="homepage-tile-single">
            <div className="homepage-tile-single-title">
              <div className="homepage-tile-single-img-box">
                <img src="pics/icons/church.png"></img>
              </div>
              <h2>PARAFIA</h2>
            </div>
            <p>
              Informacje o naszej Parafii. Sprawdź jaki jest porządek Mszy św.
              obejrzyj transmisję online i poznaj inne przydatne informacje.
            </p>
          </div>
        </motion.div>
      </Link>
      <Link to="/wspolnoty">
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="homepage-tile-single">
            <div className="homepage-tile-single-title">
              <div className="homepage-tile-single-img-box">
                <img src="pics/icons/people.png"></img>
              </div>
              <h2>WSPÓLNOTY</h2>
            </div>
            <p>
              Nasza parafia wspiera i pomaga w rozwoju duchowym na każdym
              poziomie. Poznaj i dobierz wspólnotę dla siebie. Zapraszamy
              serdecznie.
            </p>
          </div>
        </motion.div>
      </Link>
      <Link to="/sakramenty">
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="homepage-tile-single">
            <div className="homepage-tile-single-title">
              <div className="homepage-tile-single-img-box">
                <img src="pics/icons/bread.png"></img>
              </div>
              <h2>SAKRAMENTY</h2>
            </div>
            <p>
              Jesteśmy by służyć pomocą duchową naszej lokalnej społeczności.
              Dowiedz się więcej o sakramentach.
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Tiles;
