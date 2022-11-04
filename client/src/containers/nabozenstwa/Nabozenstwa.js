import React from "react";
import "./nabozenstwa.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Nabozenstwa = () => {
  return (
    <motion.div
      className="nabozenstwa"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="nabozenstwa-header header-page">
        <h1>Nabożeństwa</h1>
      </div>
      <div className="nabozenstwa-content">
        <ul>
          <li>
            <h4>Różaniec w intencji Kółek różańcowych</h4>
            <p>1-sza niedziela miesiąca - 17:30</p>
          </li>
          <li>
            <h4>Nabożeństwo do Matki Bożej rozwiązującej węzły</h4>
            <p>
              1-szy poniedziałek miesiąca (od października do czerwca)
            </p>
          </li>
          <li>
            <h4>
              Wystawienie i modlitwa w intencji powołań kapłańskich,
              zakonnych i misyjnych
            </h4>
            <p>1-szy czwartek miesiąca - po Mszy porannej</p>
          </li>
          <li>
            <h4>Adoracja Najświętszego Sakramentu</h4>
            <p>W każdy czwartek od 22:00 do 7:00 rano</p>
            <p>W trakcie adoracji godzina święta od 23 do północy</p>
            <p>
              W każdy piątek godzinna adoracja po wieczornej Mszy
              Świętej
            </p>
          </li>
          <li>
            <h4>
              Uwielbienie Najświętszego Serca Pana Jezusa, wystawienie
              i litania
            </h4>
            <p>1-szy piątek miesiąca rano o godzienie 7:00</p>
          </li>
          <li>
            <h4>Nabożeństwo fatimskie (wystawienie i różaniec)</h4>
            <p>
              13-ty dzień miesiąca (od maja do października) 17:15
            </p>
          </li>
          <li>
            <h4>Gorzkie żale</h4>
            <p>Niedziele Wielkiego Postu 17:30</p>
          </li>
          <li>
            <h4>Droga krzyżowa</h4>
            <p>
              każdy piątek Wielkiego Postu - dla dzieci o 16:30, dla
              dorosłych o 7:30 i 17:30
            </p>
          </li>
          <li>
            <h4>Nabożeństwa majowe i czerwcowe</h4>
            <p>Maj i Czerwiec 17:30</p>
          </li>
          <li>
            <h4>Różaniec dla wszystkich</h4>
            <p>Październik 17:30</p>
          </li>
          <li>
            <h4>Nabożeństwo eucharystyczne</h4>
            <p>
              24-25-26 maja - Nabożeństwo 40-to godzinne (Triduum
              przed Uroczystością Św. Filipa Neri)
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nabozenstwa;
