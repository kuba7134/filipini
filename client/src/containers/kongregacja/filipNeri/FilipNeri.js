import React from "react";
import "./filipNeri.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button } from "@mui/material";
import fneriBig from "../resources/fneri-big.png";

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

const FilipNeri = () => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.div
      variants={containerVariants}
      className="filip-neri sakramenty-slub sakramenty-single"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="sakramenty-slub-tekst">
        <div className="title">
          <h2>Filip Neri</h2>
          <div className="title-separator"></div>
        </div>
        <p>
          Filip Neri, jeden z grona wielkich reformatorów XVI wieku,
          zaliczany do wielkich mistyków chrześcijaństwa, przez swój
          oryginalny sposób życia i właściwe swojej niezależnej
          osobowości zachowanie się, bywał niestety często źle
          rozumiany i w fałszywym świetle przedstawiany
          sw._Fpotomnych. Niektóre fakty z jego życia urosły do
          legendy na miarę "Fioretti" św. Franciszka. Biografowie ze
          stygmatyka Ducha św. i męża pokory i prostoty, człowieka
          florenckiego humoru i radości, uczynili z niego dziwaka,
          wesołka, dowcipnisia i ekstrawaganta. Ten mit do dziś
          pokutuje w umysłach tych, którzy znają Filipa pobieżnie z
          kilku jego żartów urządzonych mieszkańcom Wiecznego Miasta,
          albo poznali go z kart mdłych żywotów. Filip, mimo swej
          popularności zwłaszcza w Rzymie, jest świętym mało znanym.
          Przyczyniło się do tego między innymi i to, że w swej
          pokorze uważając się za sługę nieużytecznego, nie napisał
          żadnych dzieł, jak np. jemu współcześni: św. Ignacy, św.
          Teresa, czy św. Jan od Krzyża, a to co napisał i co mogłoby
          ukazać jego świętość, jego szkołę duchowości i co mogłoby
          być świadectwem życia, kazał spalić przed swoja śmiercią.
        </p>
        <p>
          Ojczyzną Filipa była Florencja, miasto Dantego, Michała
          Anioła, Medyceuszy, ale także miejsce działalności słynnego
          "proroka z Ferrary" Hieronima Savonaroli. Tam się urodził 21
          lipca 1515 roku. Był w każdym calu dzieckiem tego miasta;
          poglądy w nim głoszone sposób życia głęboko zapisały się w
          jego osobowości. Niezależność, szacunek dla każdego
          człowieka, szeroko pojęte idee demokratyczne, humor,
          wrażliwość na piękno, prostota - to dziedzictwo, jakie
          otrzymał od tego miasta.
        </p>
        <p>
          Filip posiadał charakterystyczny dla florentczyków urok i
          dowcip. Ponnelle-Bordet określił go trafnie włoskim słowem
          'festivit '. Oznacza ono 'niezwykle dobry humor, serdeczność
          w podejściu do bliźnich, naturalność w obcowaniu
          towarzyskim..., postawę, która rozciąga się na wszystko -
          osoby i rzeczy, zwłaszcza jednak na zmienne koleje losu. Na
          co dzień jest to wolność od trosk, ... zdolność do obracania
          w żart tego wszystkiego, z czego nie można wyciągnąć żadnej
          radości.
        </p>
      </div>
      <img id="filipneri-fneri-img" src={fneriBig} alt="ślub" />
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
              Wielki wpływ na jego duchową postawę wywarli w tym
              czasie florentcy dominikanie z kościoła św. Marka.
              Właśnie tam, w krużgankach klasztoru OO. Domikanów mógł
              podziwiać tchnące głęboką duchowością, słynne malowidła
              błogosławionego Fra Angelica; tam pokazano mu też celę
              Savonaroli i jego Biblię. Po latach, Filip wyzna pewnemu
              dominikanowi: "W moim życiu wszelkie dobro otrzymałem od
              waszych ojców z San Marco".
            </p>
            <p>
              W siedemnastym roku życia opuszcza na zawsze swoje
              rodzinne miasto. Na krótki czas zatrzymuje się w San
              Germano (dziś Casino), małym miasteczku położonym u stóp
              Monte Casino, gdzie spełniając wolę swego bezdzietnego
              stryja przygotowuje się do zawodu kupca i przejęcia jego
              majątku.
            </p>
            <p>
              Jak toczyło się jego codzienne życie, nie wiemy
              dokładnie. Jego wcześni biografowie informują wprawdzie,
              że wędrował często do różnych kościołów i samotnych
              kaplic. Na pewno odwiedzał także słynne opactwo
              benedyktynów na Monte Casino. Świadectwa historyczne o
              tym nie są jednak zbyt liczne i pochodzą z późniejszych
              czasów. Caietani tak pisze w 1641 roku: 'Filip Neri,
              założyciel Kongregacji Oratorium, podwaliny swojej
              wielkiej doskonałości tworzył w San Germano i w Monte
              Casino. Tam zdobywał ducha świętych cnót i pobożności,
              zwłaszcza pod kierownictwem Euzebiusza z Eboli, jednego
              z najpobożniejszych mnichów na Monte Casino i szlachcica
              z Neapolu' (Lentini).
            </p>
            <p>
              Z czasu pobytu u stóp Monte Casino wywodzi się z
              pewnością zamiłowanie Filipa do liturgii i do Ojców
              pustyni. Tam nauczył się także starej formy życia
              wspólnego i poznał wartość 'stabilitas loci'.
              Szczególnie bliską sercu Filipa była dewiza
              benedyktynów: 'Nihil amori Christi praeponere' (Nic nie
              przekładać ponad miłość do Chrystusa).
            </p>
            <p>
              Dla Filipa był to czas trudnych, życiowych decyzji. Czas
              gorącej modlitwy: "Jak Ty wiesz i chcesz, tak czyń ze
              mną, Panie! Nie chcę niczego więcej, jak tylko pełnić,
              Panie, świętą wolę Twoją!". Ostatecznie rezygnuje z
              kupieckiej kariery, zrzeka się majątku, i jako nieznany
              i biedny pielgrzym przybywa około 1534 roku do Rzymu.
              Historyk Kościoła, Ludwik von Pastor powiedział o tej
              decyzji; "Ten krok jest tak samo heroiczny jak te,
              których dokonali Benedykt z Nursji i Franciszek z Asyżu,
              gdy odwrócili się od świata i jego błyszczącej złudy".
            </p>
            <p>
              W Rzymie Filip pozostanie już do końca swego życia,
              darzył to miasto głęboką miłością. "Dla Rzymu żył,
              pracował, uczył się i modlił, kochał i umierał! Rzym był
              obecny w jego umyśle i w sercu, w jego dziełach i
              planach, nim się radował i przez niego cierpiał. Dla
              Rzymu był św. Filip człowiekiem kultury i miłości,...
              nauczania i modlitwy".
            </p>
            <p>
              Wykształcenie, jakie otrzymał we Florencji, pozwala mu
              zająć się wychowywaniem synów pewnego florentczyka
              zamieszkałego w Rzymie. W zamian za to dostaje coś do
              zjedzenia i kąt do spania. W tym czasie Filip rozpoczyna
              studia filozoficzne w akademii "Sapienza" i teologiczne
              u Augustianów. Wciąż jednak nie ma jakichś konkretnych
              planów na przyszłość.
            </p>
            <p>
              Już w okresie studiów prowadzi intensywne życie
              modlitwy. W szczególny sposób pociągała go cisza
              katakumb. W tamtych czasach znane były tylko katakumby
              św. Sebastiana. Dla Filipa było to miejsce spoczynku
              pierwszych chrześcijan, którzy oczekiwali na
              zmartwychwstanie. Chodził tam często i spędzał całe noce
              na modlitwie. Pewien dominikanin powiedział później, że
              Filip 'żył' tam przez dziesięć lat.
            </p>
            <p>
              Ta modlitwa spontanicznie rozbudza w nim ducha
              apostolskiego. Jako student odwiedza szpitale, pomaga
              chorym, potrzebującym pomocy. Kiedy zdobył zaufanie i
              przekonał największych sceptyków, że działa
              bezinteresownie - próbuje leczyć także dusze tych ludzi,
              tak często okaleczone. Doświadczył, że idzie mu to dosyć
              łatwo. Jakiś charyzmat szybko jednał mu serca. Czuł się
              potrzebny dla nędzarzy ciała i ducha.
            </p>
            <p>
              Przerywa studia, aby cały czas poświęcić chorym i
              opowiadać im o miłości i miłosierdziu Bożym. Szybko
              znajduje naśladowców. Rozszerza swoje apostolstwo na
              ulice i place, idzie do warsztatów i składów handlowych.
              Nie zawsze jest chętnie słuchany, często staje się
              przedmiotem drwin. Święty upór i wiara przełamują
              zniechęcenie i gorycz porażki. Należy do
              współzałożycieli "Bractwa Trójcy Świętej dla opieki nad
              pielgrzymami i przytułkami dla chorych" (1548), które
              już w roku 1550, w czasie jubileuszu, zdało egzamin z
              odznaczeniem, spiesząc z pomocą tysiącom utrudzonym
              pątnikom.
            </p>
            <p>
              Idąc za radą, a raczej nakazem swego spowiednika
              przyjmuje w roku 1551 święcenia kapłańskie. Liczy
              wówczas 36 lat. Od tej chwili zakres jego pracy
              pozostaje ten sam, ale środki i kompetencje o wiele
              bogatsze. Rzymianie szybko odkryli w tym pobożnym i
              skromnym księdzu, doskonałego spowiednika i kierownika
              duchowego.
            </p>
            <p>
              Praktyka konfesjonału przekonuje go o katastrofalnie
              niskim poziomie wiedzy religijnej penitentów i dlatego
              rozpoczyna poza konfesjonałem i amboną ich religijne
              dokształcanie. Zaczyna od kilku słuchaczy, których
              gromadzi w swoim mieszkaniu. Po kilku latach
              zapoczątkowane w ten sposób zgromadzenia oratoryjne
              liczą już kilkanaście tysięcy uczestników.
            </p>
            <p>
              Oratorium było niezwykłym "zjawiskiem" w życiu
              religijnym i kulturalnym Rzymu, było zarazem niezwykle
              skuteczną i nowatorską metodą duszpsterską. Oratorium
              było nowym sposobem modlitwy i życia chrześcijańskiego:
              było spotkaniem ludzi, śpiewem i pieśnią pochwalną i
              muzyką. Zrodziło się z troski Filipa o swych penitentów,
              zwłaszcza młodych, tak podatnych na złe wpływy świata. W
              Oratorium Filipa mówi się prosto, nie z ambony, a w
              sposób "familiarny". Czyta się i rozważa Pismo św.,
              żywoty świętych, pisma o tematyce ascetyczno-duchowej.
              Systematyczne wykłady z historii Kościoła prowadzi
              późniejszy wielki historyk i kardynał Cezary Baroniusz.
              Dla Oratorium ujawniają swe talenty twórcy pieśni
              religijnych, autorzy sztuk testralnych, kompozytorzy,
              twórcy nawet tej miary, co Palestrina. Czymś normalnym w
              Oratorium stało się udzielanie głosu świeckim. W ten
              sposób nie byli oni tylko biernymi słuchaczami, ale
              mogli poczuć się potrzebni w Kościele. To budziło w nich
              zainteresowanie problemami Kościoła i ducha
              apostolskiego.
            </p>
            <p>
              Ktoś słusznie napisał: "Z pieśniami wychodzono z
              Oratorium na ulicę, i z pytaniem: Co dzisiaj dobrego
              mamy zdziałać? Nie wielkiego lub sensacyjnego, lecz
              dobrego. Szli więc przez Rzym ludzie zachwyceni
              wielkością Boga, mądrością zawartą w ewangelii oraz
              prostotą prawd Chrystusowych. Były to nie pochody
              triumfalne, w których dostojnicy kościelni i świeccy
              zajmowali zwykle pierwsze miejsca, ale pielgrzymki do
              siedmiu najważniejszych rzymskich kościołów, gdzie
              uczestnicy stawali w prawdzie i pokorze przed Bogiem.
              Tak przywracano stolicy chrześcijaństwa charakter
              sakralny, któremu humaniści przeciwstawiali tęsknotę za
              Romą cezarów".
            </p>
            <p>
              Nic zatem dziwnego, że znaleźli się też tacy, którzy w
              spotkaniach urządzanych przez Filipa dopatrywali się
              niebezpieczeństwa. Oskarżyli go, że sprzyja "nowinkom"
              niebezpiecznym dla wiary, że tworzy sektę... Doszło do
              tego, że surowy papież Paweł IV zakazał Filipowi na
              pewien czas tej działalności, a nawet na piętnaście dni
              odebrał mu prawo do spowiadania. Filip zniósł tę próbę w
              pokorze. Wszystko się wkrótce szczęśliwie wyjaśniło.
              Papieże nadal darzyli go zaufaniem, a nawet przyjaźnią,
              jak Grzegorz XIV (1590-91), czy Klemens VIII
              (1592-1605).
            </p>
            <p>
              Kiedy ćwiczenia oratoryjne objęły cały Rzym, kiedy stało
              się czymś modnym chodzić do Oratorium, Filip organizuje
              grupę stałych współpracowników; niektórych z nich
              przeznacza do kapłaństwa - to oni stworzyli wspólnotę
              życia, która później dała początek nowemu zgromadzeniu.
              Przez długi czas Filip wzbraniał się przed nadaniem tej
              wspólnocie kapłanów jakichś form społeczności zakonnej.
              Nie w jego stylu byłoby przyjęcie tytułu "założyciela".
              Papieże jednak nalegali, żeby ten luźny związek
              duchownych przekształcił się wreszcie w zgromadzenie o
              stałej i sciśle określonej strukturze prawnej. Stało się
              to 15 lipca 1575, za czasów p. Grzegorza XIII.
            </p>
            <p>
              W uznaniu zasług, papież Grzegorz XIII chciał obdarzyć
              Filipa godnością kardynała. Nie przyjął jej. Współcześni
              dostrzegli w tym geście lekcję prawdziwej wielkości,
              daną ludziom XVI wieku, kuszonym do wywyższania się
              ponad prawdy i prawa Boże.
            </p>
            <p>
              Ostatnie lata życia Filip przeznaczył na pracę w
              konfesjonale i na rozmowy z przyjaciółmi. Zmarł mając 80
              lat (26.05.1595), a kard. Baroniusz, jego uczeń napisał
              o nim: "aż do 80 roku życia, aż do samej śmierci nie żył
              dla siebie, lecz dla dobra drugich, dla dobra swoich
              Rzymian, a Rzym odpłacił mu się za to bezgranicznym
              zaufaniem. starcem już będąc, pozostał nadal Apostołem
              Wiecznego Miasta, a jego apostolstwo rozciągało się na
              wszystkie kategorie ludzi, począwszy od papieża do
              ostatniego ulicznika". Te słowa nie mają nic z przesady
              czy taniego komplementu.
            </p>
            <p>
              Do dziś, każdego roku, w dniu 26 maja, w rocznicę
              śmierci Filipa, przy drzwiach Chiesa Nuova w Rzymie,
              kościoła w którym spoczywaja doczesne szczątki Świętego,
              Przełożony Kongregacji Rzymskiej przyjmuje delegację
              zarządu miasta Rzym, która przekazuje ufundowany przez
              Rzym kielich jako wotum dziękczynne dla swojego drugiego
              Apostoła - św. Filipa.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FilipNeri;
