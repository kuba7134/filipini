import React, { useState } from "react";
import "./rysHistoryczny.css";
import { motion } from "framer-motion";
import rys from "../resources/rys.jpg";
import rys2 from "../resources/rys2.jpg";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import { AiOutlineArrowUp } from "react-icons/ai";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#983e3e",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const RysHistoryczny = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.div
      className="rys sakramenty-slub sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="rys-text">
        <div className="title">
          <h2>Rys historyczny</h2>
          <div className="title-separator"></div>
        </div>
        <h3>Początki Oratorium tomaszowskiego</h3>
        <p>
          sięgają lat 1969 - 71, gdy na prywatnej działce przu ul.
          Niskiej 81 wybudowano jednorodzinny domek oraz garaż i
          suszarnię owoców, którą już w 1971 r. przystosowano na salę
          katechetyczną, w której nauczano prawd wiary. W rok później
          Ks. Bp Ordynariusz Józef Rozwadowski zezwala na codzienne
          odprawianie Mszy św., a kilka miesięcy później eryguje
          kaplicę pod wezwaniem Świętej Rodziny i zezwala na
          przechowywanie w niej Najświętszego Sakramentu, ufając
          Opatrzności Bożej na utworzenie nowej Parafii.
        </p>
      </div>
      <img src={rys} alt="rys" loading="lazy" />
      <img id="rys-img-last" src={rys2} alt="rys" loading="lazy" />
      <div id="rys-text-last" className="rys-text">
        <h3>Dnia 18 listopada 1976 r.</h3>
        <p>
          Kuria Biskupia określa granice przyszłej parafii tworząc
          zgodnie z wymogami Prawa Kanonicznego tzw. -Rektorat-,
          czyniąc usilne starania u Władz Państwowych o zatwierdzenie
          Parafii i budowę kościoła. Wysiłki te nie odnoszą
          pozytywnego skutku, jednak nie zrażają miejscowych
          duszpasterzy. W tym okresie pracą duszpasterską objętych
          jest ok. 3 tys. wiernych; 800 dzieci i młodzieży korzysta z
          katechizacji, tworzy się Młodzieżowy Zespół Teatralny
          -Oratorium- działający przy kaplicy. W niedzielę w kaplicy -
          mogącej pomieścić 300 osób odprawianych jest sześć Mszy św.,
          w większe natomiast uroczystości wierni gromadzą się na
          placu. Postawa ludzi jest wytrwała, godna do naśladowania.
        </p>
      </div>
      <div className="rys-read-more">
        <ThemeProvider theme={theme}>
          {readMore ? (
            <Button
              onClick={() => setReadMore(!readMore)}
              variant="contained"
            >
              <AiOutlineArrowUp size={24} />
            </Button>
          ) : (
            <Button
              onClick={() => setReadMore(!readMore)}
              variant="contained"
            >
              Czytaj więcej
            </Button>
          )}
        </ThemeProvider>
        {readMore && (
          <div className="rys-read-more-text">
            <p>
              Dniem szczególnym był 26 maja 1978 r. - Uroczystość św.
              Filipa Neri Założyciela Zgromadzenia Księży Filipinów.
              Urząd Wojewódzki w Piotrkowie tryb. powiadamia o
              legalizacji Ośrodka Duszpasterskiego w Tomaszowie Maz.
              prowadzonego prze księży Filipnów. Zbieg okoliczności
              czy szczególna opieka św. Filipa Neri? Kongregacja
              została erygowana Dekretem Biskupa Łódzkiego Józefa
              Rozwadowskiego dnia 18 grudnia 1980 ( Dekret nr 1961/80
              ). Dekret ten został potwierdzony w myśl art. 19
              Statutów Generalnych Kongregacji Oratorium św. Filipa
              Neri przez Stolicę Apostolską - Kongregację do spraw
              Zakonów i Instytutów Świeckich z 10 stycznia 1989 r. (
              Protokół nr 21624/88 ).
            </p>
            <p>
              Dnia 20 grudnia 1980 r. Ks. Bp tworzy nową parafię pod
              wezwaniem Świętej Rodziny powiększając jej teren do 5
              tys. wiernych i przyłączając na stałe do Kongregacji
              Oratorium. 3 czerwca 1981 r. Kongregacja św. Filipa Neri
              w Tomaszowie Maz. otrzymuje pozwolenie na budowę
              kościoła. W uroczystość odpustową ku czci św. Filipa, 26
              maja 1982 r. Ks. Bp Bohdan Bejze dokonuje poświęcenia
              podziemnej części kościoła i wmurowuje kamień węgielny
              przywieziony z Nazaretu i Studzianny. 23 września 1984
              r. Biskup Ordynariusz Józef Rozwadowski poświęca nowo
              zbudowaną świątynię oddając ją do użytku Kongregacji i
              wiernych. W roku 1987 oddano do użytku nowo zbudowany
              budynek klasztorny, Klasztor poświęcił 26 maja 1987 r.
              Ks. Bp Adam Lepa - biskup pomocniczy łódzki. Nowo
              zbudowaną świątynię konsekrował Ks. Bp Ordynariusz
              Władysław Ziółek 20 października 1990 r. w dziesiątą
              rocznicę powołania Kongregacji i Parafii. 28
              października 1998 r. w kościele została odsłonięta i
              poświęcona przez Ks. Arcybiskupa Władysława Ziółka
              tablica marmurowa upamiętniająca Dwudziestą Rocznice
              Pontyfikatu Jana Pawła II, ufundowana przez wiernych z
              osiedla Nowy Port. Każdego roku teren wokół kościoła
              nabiera coraz bardziej estetycznego wyglądu dzięki takim
              pracom, jak wyłożenie wszystkich alei przy kościele
              kostką brukową, nowa elewacja kościoła i klasztoru, a
              także ubogacanie całego terenu zielenią. Z ofiar
              złożonych przez parafian zostały odlane dzwony
              kościelne, które poświęcił 26 maja 1999 r. Ks.
              Arcybiskup Władysław Ziółek - obecnie Metropolita
              Łódzki.
            </p>
            <p>
              Zakupiliśmy do naszego kościoła włoskie organy firmy
              Viscount, oparte na samplingowej technologii wytwarzania
              dźwięku. Obecnie parafia i kogregacja przygotowują się
              do jubileuszu 25-lecia istnienia, który przypada w
              grudniu 2005 roku. W sposób duchowy będziemy
              przygotowywać się do tych uroczystości począwszy od
              stycznia przez cały rok, biorąc udział w specjanych
              spotkaniach każdego 26 dnia miesiąca. Przygotowaniom
              duchowym towarzyszą również prace materialne jak
              malowanie klasztoru i kościoła. Z okazji jubileuszu
              został wydany okolicznościowy kalendarz parafialny,
              ukazujący życie relgijne parafii na przestrzeni całego
              roku. Prosimy Wszystkich przyjaciół naszej Parafii i
              Kongregacji o dalszą modlitwę w intencji naszego ośrodka
              duszpasterskiego, by w duchu św. Filipa Neri - pomagał
              wiernym odnajdywać drogę do Chrystusa.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RysHistoryczny;
