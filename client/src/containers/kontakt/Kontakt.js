import React from "react";
import "./kontakt.css";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Kontakt = () => {
  return (
    <motion.div
      className="kontakt"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="kontakt-header header-page">
        <h1>Kontakt</h1>
      </div>
      <div className="kontakt-content nabozenstwa-content">
        <div className="kontakt-content-info">
          <h3>Adres</h3>
          <a
            href="https://goo.gl/maps/ichHV2LVnGVfmmpR6"
            target="blank"
          >
            <SiGooglemaps />
            <p className="text-no-wrap">ul. św Filipa Neri 1</p>
          </a>
          <p>Tomaszów Mazowiecki</p>
          <h3>Kontakt</h3>
          <a href="tel:501815508">
            <BsFillTelephoneFill />
            <p className="text-no-wrap">501 815 508</p>
          </a>
          <a
            className="footer-mail"
            href="mailto:tomaszow-rodziny@archidiecezja.lodz.pl"
          >
            <IoIosMail />
            <p className="email-adress">
              <span>tomaszow&#8209;rodziny</span>
              <span>@archidiecezja.lodz.pl</span>
            </p>
          </a>
        </div>

        <div className="kontakt-quote-box wspolnoty-quote-box">
          <h3>KLAUZULA INFORMACYJNA</h3>
          <p>
            Zgodnie z art. 8 ust. 1 Dekretu ogólnego w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych
            osobowych w Kościele katolickim wydanym przez Konferencję
            Episkopatu Polski w dniu 13 marca 2018 r. (dalej: Dekret)
            informuję, że:
          </p>
          <ol>
            <li>
              administratorem Pani/Pana danych osobowych jest
              ARCHIDIECEZJA ŁÓDZKA, ul. ks. I. Skorupki 3, 90-458
              Łódź,
            </li>
            <li>
              inspektorem ochrony danych w ARCHIDIECEZJI ŁÓDZKIEJ
              jest: ks. dr Zbigniew Tracz 90-458 Łódź, ul. ks. I.
              Skorupki 1 mail: iod@archidiecezja.lodz.pl
            </li>
            <li>
              Pani/Pana dane osobowe przetwarzane będą w zakresie
              kontaktu z Panią/Panem
            </li>
            <li>
              podstawą przetwarzania tych danych jest Pani/Pana zgoda
            </li>
            <li>
              odbiorcą Pani/Pana danych osobowych jest Kuria
              Metropolitalna Łódzka
            </li>
            <li>
              Pani/Pana dane osobowe nie będą przekazywane do
              publicznej kościelnej osoby prawnej mającej siedzibę
              poza terytorium Rzeczypospolitej Polskiej
            </li>
            <li>
              Pani/Pana dane osobowe będą przechowywane przez czas
              załatwienia sprawy przesłanej w formularzu
            </li>
            <li>
              posiada Pani/Pan prawo dostępu do treści swoich danych
              oraz prawo ich sprostowania, usunięcia lub ograniczenia
              przetwarzania zgodnie z Dekretem
            </li>
            <li>
              ma Pani/Pan prawo wniesienia skargi do Kościelnego
              Inspektora Ochrony Danych, gdy uzna Pani/Pan, iż
              przetwarzanie danych osobowych Pani/Pana dotyczących
              narusza przepisy Dekretu: Kościelny Inspektor Ochrony
              Danych, Skwer kard. Stefana Wyszyńskiego 6, 01-015
              Warszawa, e-mail: kiod@episkopat.pl.
            </li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
};

export default Kontakt;
