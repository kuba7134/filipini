import React from "react";
import "./oratorium.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import oratorium from "../resources/oratorium.jpg";
import { AiOutlineArrowUp } from "react-icons/ai";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#983e3e",
    },
  },
});

const Oratorium = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.div
      className="filip-neri sakramenty-slub sakramenty-single"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-slub-tekst">
        <div className="title">
          <h2>Oratorium</h2>
          <div className="title-separator"></div>
        </div>
        <p>
          Co to jest Oratorium? Okazać się może rzeczą trudną podanie
          definicji, która by nie miała posmaku komentarza prawa
          kanonicznego. Wielu specjalistów od spraw filipińskich
          napisało o nim bardzo obszerne uwagi zarówno historyczne jak
          i prawnicze lub anegdotyczne, każdy, kto pragnie pogłębić te
          aspekty, ma jedynie kłopot z dokonaniem wyboru. Myślę
          jednak, że ostatnie monumentalne dzieło Cistelliniego
          kładzie kres wszelkim dwuznacznym intepretacjom.
        </p>
        <p>
          Bogactwo świadectw oraz pogłębiona analiza dokumentów
          stanowią teraz mocny punkt historii początków Oratorium i
          Kongregacji Oratorium rzymskiego.
        </p>
        <p>
          W tym miejscu trzeba koniecznie wyjaśnić, że duch, który
          ożywiał Oratorium rzymskie, przeszedł również na te
          wspólnoty, które bezpośrednio wyłoniły z niego jak i na
          założone "ad instar" (na jego wzór), którymi były po
          większej części starodawne fundacje, a także na te, które
          powstały z inicjatywy jakiejś charyzmatycznej osobowości,
          jak i na te, które, dzięki Bogu, powstają jeszcze dziś w
          niektórych krajach, nie tylko europejskich.
        </p>
      </div>
      <img src={oratorium} alt="ślub" />
      <div className="filipneri-read-more">
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
              Po tym koniecznym wyjaśnieniu, że nie mamy zamiaru
              dokonywania analizy historycznej Oratorium, inni bowiem,
              bardziej kompetentni, o tym już napisali, wydaje się, iż
              rzeczą bardziej pożyteczną dla tych, którzy nie znają
              tej genialnej inspiracji serca św. Filipa, będzie
              przyjrzenie się jego naturze a nade wszystko jego
              duchowości.
            </p>
            <p>
              W najnowszych Konstytucjach i Statutach Generalnych
              Kongregacji Oratorium św. Filipa Neri, które są wynikiem
              długiej pracy, koniecznej po Soborze Watykańskim II, na
              pierwszym miejscu umieszczono punkt o naturze Oratorium,
              podczas gdy o Kongregacji jest mowa dopiero potem,
              została ona bowiem ustanowiona po to, aby służyła
              Oratorium.
            </p>
            <p>
              Św. Filip, jak już wiadomo, nigdy nie myślał o założeniu
              zakonu, jego uwaga była skierowna głównie na Oratorium,
              które wynikło niejako z natchnienia Ducha Bożego, gdy,
              krótko po otrzymaniu święceń kapłańskich, zaangażował
              się w wielkie dzieło duchowego odrodzenia społeczeństwa
              swoich czasów.
            </p>
            <p>
              S. Girolamo della Caritá stało miejscem narodzin
              Oratorium. Tu wzięło początek zwłaszcza indywidualne
              kierownictwo duchowe, które miało nadać nowy kierunek,
              bardziej spójny, praktyce życia chrześcijańskiego. Nawet
              wielkiego św. Karola Borromeusza zdumiewała umiejętność
              św. Filipa kierowania duszami. Oratorium więc jest
              wyjątkową instytucją ukształtowaną przez św. Filipa i
              jego synów duchowych w San Girolamo della Caritá. Było
              ono wyraźnie dziełem nowym i nie należy mylić go ze
              stowarzyszeniami świeckimi lub bractwami, które
              pojawiały się tu i tam w celach charytatywnych lub jako
              zrzeszenia ludzi wykształconych.
            </p>
            <p>
              Oratorium przeto, od swoich początków, było instytucją,
              która miała na celu bardziej pomaganie duszom aniżeli
              ciałom. Nawet jeżeli jest prawdą, że jego członkowie
              często z praktykami religijnymi łączyli odwiedzanie
              chorych w szpitalach rzymskich oraz inne dzieła
              miłosierdzia.
            </p>
            <p>
              Lata doświadczenia rzymskiego pokazały Ojcu Filipowi,
              jak go poufale nazywano, że chrześcijanie żyjący w
              świecie, z wyjątkiem niewielu w szczególny sposób
              wspieranych łaską, nie potrafią samodzielnie osiągnąć
              celu życia chrześcijańskiego. Zwłaszcza świeccy leżeli
              mu na sercu. Widział, że potrzebowali kogoś, kto by,
              jako "ojciec duchowny", rozbudził w nich i bronił
              praktykowanie chrześcijaństwa.
            </p>
            <p>
              Na czym polega "familiarny charakter" życia pobożnego, o
              którym tak często mówi się w starodawnych relacjach i w
              źródłach o św. Filipie? Rozumie się przez to, na
              pierwszym miejscu, że religia może stać się bardziej
              biska dla każdego, kto ma dobrą wolę. W znaczeniu
              dosłownym oznacza to, że Duch Święty nie zstępuje na
              tych, którzy się izolują. On zstępuje na braci
              zgromadzonych w tej samej wierze, w tej samej nadziei, w
              tej samej miłości.
            </p>
            <p>
              Ojciec Manni, jeden z synów duchowych św. Filipa, mówi
              nam, że Święty pragnął, aby: "...codzienne słuchanie
              Słowa Bożego było rekompensatą postów, czuwań,
              milczenia, ponieważ Słowo Boże, słuchane uważnie, jest
              dorównuje takim ćwiczeniom". Dlatego też na pierwszym
              miejscu stawiane jest Słowo Boże w Piśmie świętym, Filip
              jednak znajdował również Ewangelię realizowaną w
              życiorysach Świętych i w Historii Kościoła. W Oratorium
              takie głoszenie Słowa Bożego nie musiało dokonywać się
              za pomocą wielkich kazań, lecz poprzez familiarne zwykłe
              dzielenie się Słowem Bożym, w braterskiej rozmowie, w
              domowej zażyłości, pośrodku codziennego życia. Również
              świeckim dawano możność głoszenia Słowa Bożego.
            </p>
            <p>
              Oratorium było więc dla Filipa wielkim gronem ludzi i
              ich rodzin, chrześcijan żyjących w świecie, którzy
              codziennie gromadzili się wokół niego i jego przyjaciół.
              To Oratorium świeckie, Oratorium dla ludzi żyjących w
              świecie, stanowiło dla Filipa i dla jego uczniów formę
              apostolatu, stojącą u nich na pierwszym miejscu. Jego
              rytm wyznaczały codzienne praktyki i modlitwy we
              wspólnocie oraz wyznaczanie do spełnienia przez
              poszczególnych członków dzieł miłosierdzia co do ciała i
              co do duszy. Dla Filipa i jego "towarzyszy" do Oratorium
              należeli zarówno "bracia zewnętrzni" jak i "bracia
              wewnętrzni". Oto dlaczego kardynał Baronio, wielki uczeń
              św. Filipa, sądził, iż w Oratorium rzymskim widzi
              zmartwychwstałą pierwotną chrześcijańską wspólnotę z
              Jerozolimy. Dlatego też naturą Oratorium jest również
              odtwarzanie w pewien sposób "kościoła domowego", który
              mógłby potem promieniować swoją świętością na zewnątrz.
              Sądzę, że ta cecha Oratorium jest jeszcze obecnie bardzo
              aktualna. Również w dzisiejszych czasach, tak bardzo
              trudnych, tak bardzo niepewnych, ta instytucja
              filipińska może przekazywać, pod wpływem Ducha Świętego,
              miłość, radość, pokój, cierpliwość, życzliwość i dobroć.
            </p>
            <p>
              Rozważając drugi aspekt, to znaczy duchowość Oratorium,
              można popaść w zakłopotanie. Św. Filip nigdy nie
              naszkicowł programów dla swoich uczniów, w ogóle
              pozostawił bardzo mało pism, około trzydziestu listów,
              nie zatroszczył się także o nakreślenie piórem jakiegoś
              jednorodnego planu życia duchowego. To było przede
              wszystkim zasadą jego życia osobistego, że zajmował się
              przede wszystkim nauczaniem, tymczasem jego instrukcje i
              dyrektywy pozostawały we fragmentarycznych upomnieniach,
              wskazówkach, aforyzmach, przestrogach, które jego
              uczniowe skrupulatnie przechowywali w pamięci jako
              pewnego rodzaju zbiory maksym i wspomnień. Wiele z nich
              ze szczególną żywością i dobitnością zabrzmiało w
              licznych zeznaniach w procesie kanonizacyjnym. Do
              nakreślenia duchowego oblicza szkoły filipińskiej,
              jeżeli rzeczywiście można o takiej mówić, mogą nadto być
              pożyteczne nieliczne pisma najstarszych jego uczniów.
            </p>
            <p>
              Istotną przesłanką działalności Filipa, w jego czasach
              dość osobliwą, było to, że intensywne życie duchowe
              "uważane za sprawę trudną i zarezerwowaną dla
              nielicznych uprzywilejowanych, miało okazać się do tego
              stopnia przystępnym i zwyczajnym, że w każdym stanie i
              pozycji społecznej, w swoim domu i w wykonywanym
              zawodzie, świecki i duchowny, prałat i książę świecki,
              dworzanin, ojciec rodziny, człowiek wykształcony lub
              prostaczek, szlachcic lub plebejusz, kupiec lub
              rzemieślnik, słowem wszelkiego rodzaju ludzie są zdolni
              do prowadzenia życia duchowego..." (Talpa). U podstaw
              gmachu życia duchowego leży, według św. Filipa, cnota
              pokory: "... świętość, mówił, dotykając czoła, leży na
              szerokości trzech palców, to znaczy w umartwianiu tego,
              co rozumowe..."
            </p>
            <p>
              Oratorium jest właśnie w dużej mierze szkołą pokory. To
              pokora pomaga do pełnego pokora_Filipaoderwania się od
              siebie samego, od zaszczytów i dóbr doczesnych, ona
              chroni przed zdeprawowaniem świata i popycha do
              działalności apostolskiej. Innym fundamentem tej
              duchowości jest miłość do Boga. U Filipa jest ona
              miłością wyłączną i w najwyższym stopniu
              chrystocentryczną: "...kto pragnie czegoś innego niż
              Chrystusa, nie wie czego pragnie; kto szuka czegoś
              innego niż Chrystusa, nie wie czego się domaga; kto
              pracuje nie dla Chrystusa, nie wie po co to czyni..." W
              ascetycznej szkole Filipa posłuszeństwo jest konieczną
              konsekwencją ducha pokory i umartwienia. Jest ono,
              według Ojca: "...prawdziwym całopaleniem, które ofiaruje
              się Bogu na ołtarzu naszego serca...", i jest drogą,
              krórą najszybciej można dojść do doskonałości. Duchowość
              Oratorium charakteryzuje się jeszcze pietyzmem, który ją
              kształtuje i który jest jej szczególnym wyrazem.
              Oratorium jest przede wszystkim spotkaniem modlitewnym,
              jak wskazuje na to jego nazwa. Modlitwy ustne odbywają
              się na przemian z modlitwami myślnymi, których Oratorium
              od początku będzie jedną z najbardziej wpływowych szkół.
              Zresztą medytacja zajmuje doniosłe miejsce w
              skodyfikowanych regułach dla braci Oratorium oraz dla
              członków Kongregacji.
            </p>
            <p>
              Te zasady, który zostały tu naszkicowane,
              usprawiedliwiają jeszcze dzisiaj obecność Oratorium w
              Kościele i w świecie i stanowią jego charyzmat. Ta
              aktualność Oratorium jest związana również z wielką
              miłością, jaką św. Filip żywił dla świeckich, którzy go
              otaczali i którzy jeszcze w dalszym ciągu naśladują jego
              przykład w różnych wspólnotach zgodnie z lokalnymi
              zwyczajami i tradycjami, wspomagani i kierownai przez
              ojców Kongregacji Oratorium.
            </p>
            <p style={{ textAlign: "right", fontStyle: "italic" }}>
              Carissimo Ruggeri
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Oratorium;
