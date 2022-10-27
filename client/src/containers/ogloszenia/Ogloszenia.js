import React from "react";
import "./ogloszenia.css";
import { motion } from "framer-motion";
import { GiScrollUnfurled } from "react-icons/gi";
import { Headerao } from "../../components";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const single = {
  date: "16 X 2022",
  title: "XXIX NIEDZIELA ZWYKŁA",
  text: [
    "Dziś zmiana tajemnic Żywego Różańca. Przypominamy, że od dziś wieczorna Msza św. w niedziele i święta będzie o g. 17.oo.",
    "We wtorek modlitwa do św. Filipa Neri, a w środę Nowenna do MBNP o g. 8.3o i 18.oo.",
    "W drugi czwartek miesiąca Msza św. w intencji rodzin Domowego Kościoła i Krucjaty Wyzwolenia Człowieka o g. 18.oo. Nabożeństwo do Matki Bożej Rozwiązującej Węzły 8.09. o g. 20.oo.",
    "Koronka do Miłosierdzia Bożego w piątek o g. 15.oo.",
    "Dziś zmiana tajemnic Żywego Różańca. Przypominamy, że od dziś wieczorna Msza św. w niedziele i święta będzie o g. 17.oo.",
    "We wtorek modlitwa do św. Filipa Neri, a w środę Nowenna do MBNP o g. 8.3o i 18.oo.",
    "W drugi czwartek miesiąca Msza św. w intencji rodzin Domowego Kościoła i Krucjaty Wyzwolenia Człowieka o g. 18.oo. Nabożeństwo do Matki Bożej Rozwiązującej Węzły 8.09. o g. 20.oo.",
    "Koronka do Miłosierdzia Bożego w piątek o g. 15.oo.",
  ],
};

const ogloszenia = [single, single, single, single, single];

const Ogloszenia = () => {
  return (
    <motion.div className="ogloszenia"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden">
      <Headerao title="Ogłoszenia" />
      <div className="ogloszenia-container">
        <div className="ogloszenia-container-current">
          <div className="ogloszenia-container-current-top">
            <p>{ogloszenia[0].date}</p>
            <h2>{ogloszenia[0].title}</h2>
          </div>
          <ul>
            {ogloszenia[0].text.map((item, index) => (
              <li key={index} className="ogloszenia-single-text">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="ogloszenia-container-all">
          <h2>Poprzednie ogłoszenia</h2>
          {ogloszenia.map((item, index) => (
            <div key={index} className="ogloszenia-container-all-single">
              <p>{item.date}</p>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Ogloszenia;
