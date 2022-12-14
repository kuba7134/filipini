import React from "react";
import "./przystan12.css";
import { images } from "./images";
import { motion } from "framer-motion";
import Carousel from "../../../components/carousel/Carousel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Przystan12 = () => {
  return (
    <div className="przystan12">
      <div className="title title-top title-top-wspolnoty">
        <div className="fit-content">
          <h2>Przystań Dwunastu</h2>
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
          {/* <div className="title-with-top">
            <h2>Przystań Dwunastu</h2>
            <div className="title-separator"></div>
          </div> */}
          <div className="wspolnoty-quote-box">
            <p>
              Cześć, Jesteśmy wspólnotą Przystań Dwunastu, którą
              tworzą mega pozytywni i uwielbiający Boga ludzie. Raz w
              mięsiącu organizujemy Wieczory Uwielbienia w parafii św.
              Rodziny. Uwielbienia rozpoczynamy zawsze Eucharystią i
              bezpośrednio po następuje Uwielbienie. Zadaniem naszej
              wspólnoty jest pokazanie innej strony modlitwy i
              uwielbienia Naszego Pana i Zbawiciela Jezusa. Chcemy
              pokazać drogę do Niego oraz w jaki sposób z Nim
              rozmawiać. Tworzymy własne utwory, których możecie
              posłuchać na naszym{" "}
              <a
                href="https://www.youtube.com/channel/UCQnzze8sfno9GyUs56BW-mA"
                target="blank"
                style={{ textDecoration: "underline" }}
              >
                YouTube
              </a>
              . Zajmujemy się również organizacją i prowadzeniem
              rekolekcji ewangelizacyjnych.
            </p>
            <p>Skład Naszej Wspólnoty:</p>
            <ul className="wspolnoty-quote-box-list">
              <li>
                Kierownikiem Duchowym jest Ksiądz Proboszcz{" "}
                <span className="text-no-wrap">Grzegorz Chirk.</span>
              </li>
              <li>
                Gitara akustyczna, Autor Utworów i aranżacji Pieśni:{" "}
                <span className="text-no-wrap">Piotr Przedbora</span>
              </li>
              <li>
                Skrzypce, Wokal, Autorka Utworów i aranżacji Pieśni:{" "}
                <span className="text-no-wrap">
                  Julia Wrońska-Przedbora
                </span>
              </li>
              <li>
                Gitara elektryczna:{" "}
                <span className="text-no-wrap">
                  Grzegorz Przedbora
                </span>
              </li>
              <li>
                Perkusja:{" "}
                <span className="text-no-wrap">Paweł Zysiak</span>{" "}
              </li>
              <li>
                Bas:{" "}
                <span className="text-no-wrap">Wojtek Szymański</span>{" "}
              </li>
              <li>
                Wokal:{" "}
                <span className="text-no-wrap">Kamila Kamocka </span>
              </li>
              <li>
                Wokal:{" "}
                <span className="text-no-wrap">
                  Natalia Kucharska
                </span>
              </li>
              <li>
                Wokal:{" "}
                <span className="text-no-wrap">Joanna Przedbora</span>
              </li>
            </ul>
            <p className="wspolnoty-quote-box-author">
              Joanna Przedbora
            </p>
          </div>
        </div>
        <Carousel images={images} />
      </motion.div>
      <div className="video-wrapper">
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/kL9V1bQTV5s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Przystan12;
