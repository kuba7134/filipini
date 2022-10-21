import React from "react";
import "./aktualnosci.css";
import SingleNews from "./singlenews/SingleNews";

const news = [
  {
    id: 0,
    title: "Ogłoszenia na 28. Niedzielę Zwykłą  9 października 2022 roku",
    date: { day: 14, month: "mar", year: 2020 },
    img: "https://parafiabralbert.waw.pl/wp-content/uploads/2021/01/ogloszenia-parafia-brata-alberta.jpg",
    content: `Za kilka dni w katedrze w Pelplinie pięciu diakonów naszego Wyższego Seminarium Duchownego przyjmie święcenia kapłańskie. Przez ostatnie dwa lata celebracja święceń była skromniejsza, przede wszystkim przez ograniczenia wynikające z pandemii. Uroczystość ta jest jednak tak ważna dla całej naszej diecezjalnej wspólnoty, że w tym roku chcemy się pełniej podzielić radością z daru nowych kapłanów.
Nie byłoby święceń bez Bożego wezwania młodych ludzi na kapłańską drogę, zatem Panu Stworzenia najpierw składam dziękczynienie za łaskę powołania i Jemu polecam w modlitwie każdego kapłana naszej diecezji.
Dziękuję również rodzinom przyszłych prezbiterów, parafiom, z których się wywodzą, naszemu seminarium i wszystkim otaczającym ich troską. Niech Wasze wsparcie, zwłaszcza modlitewne, wyprasza im potrzebne łaski.
Zapraszam serdecznie do udziału we Mszy świętej w sobotę, 28 maja br. o godz. 11.00 w bazylice katedralnej w Pelplinie, podczas której udzielę święceń kapłańskich pięciu diakonom. Niech nie zabraknie na tej uroczystości księży, sióstr i braci zakonnych oraz wszystkich, którym leży na sercu troska o powołania kapłańskie. Zapraszam też młodych ludzi, którzy zastanawiają się, czy pójść za Chrystusem. Spotkanie z przepełnionymi szczęściem neoprezbiterami może być dla Was tym momentem, który przeważy w podjęciu decyzji o głoszeniu Ewangelii współczesnemu światu jako kapłan.
Siostry i Bracia, raz jeszcze dziękując za Wasze modlitwy oraz wsparcie powołań i powołanych, wszystkim z serca błogosławię, w imię Ojca i Syna i Ducha Świętego.`,
  },
];
const temp = [...news, ...news, ...news, ...news, ...news, ...news];

const Aktualnosci = () => {
  return (
    <div className="aktualnosci">
      <h1>Aktualności</h1>
      <div className="aktualnosci-container">
        {temp.map(item => (
          <SingleNews news={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Aktualnosci;
