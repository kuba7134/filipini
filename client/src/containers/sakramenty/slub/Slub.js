import React from "react";
import "./slub.css";
import slub from "../resources/slub.jpg";
import slub2 from "../resources/slub2.jpg";

const Slub = () => {
  return (
    <div className="sakramenty-slub sakramenty-single">
      <div className="sakramenty-slub-tekst">
        <div className="title">
          <h2>Ślub</h2>
          <div className="title-separator"></div>
        </div>
        <h3>Czas załatwienia formalności przedślubnych</h3>
        <p>
          Kandydaci do małżeństwa powinni obowiązkowo zgłosić się do kancelarii
          parafialnej trzy miesiące przed ślubem w celu rozważnego i spokojnego
          podjęcia bezpośredniego przygotowania do ślubu, ewentualnego
          uzupełnienia katechezy przedmałżeńskiej i załatwienia formalności.
        </p>
        <h3>Zapowiedzi</h3>
        <p>
          Każde zamierzone małżeństwo należy podać do publicznej wiadomości, nie
          tylko z tej racji, że wierni są w sumieniu obowiązani wyjawić znane im
          przeszkody, ale także dlatego, że małżeństwo winno być faktem znanym
          wspólnocie parafialnej, do której należą narzeczeni.
        </p>
      </div>
      <img src={slub} alt="ślub" />
      <img id="slub2" src={slub2} alt="ślub2" />
      <div className="sakramenty-slub-tekst">
        <h3>Dokumenty</h3>
        <ul>
          <li>
            metryka chrztu świętego wydana nie wcześniej niż 6 miesięcy przed
            zgłoszeniem się zainteresowanych do duszpasterza
          </li>
          <li>
            świadectwo przyjęcia sakramentu bierzmowania (jeśli nie jest wpisane
            w metryce chrztu)
          </li>
          <li>świadectwo ukończenia kursu przedmałżeńskiego.</li>
          <li>dowód osobisty</li>
          <li>
            jeśli narzeczeni pragną zawrzeć małżeństwo konkordatowe dostarczają
            trzy egzemplarze zaświadczenia sporządzonego przez kierownika Urzędu
            Stanu Cywilnego miejsca zamieszkania jednego z narzeczonych.
          </li>
        </ul>
      </div>
      <div className="sakramenty-slub-bottom sakramenty-slub-tekst">
        <p>
          Po zgłoszeniu się na 3 miesiące przed ślubem do kancelarii parafialnej
          ma miejsce spisanie protokołu kanonicznego, danie na zapowiedzi.
          Należy bezpośrednio po tym zgłoszeniu odbyć spowiedź świętą
          przygotowującą do sakramentu małżeństwa (Na początku spowiedzi
          powiedzieć iż jest to pierwsza spowiedź przedślubna). Następnie
          kandydaci zgłaszają się na w przeddzień ślubu w celu spisania aktu
          ślubu i złożenia podpisów. Przed samym ślubem należy odbyć następną
          spowiedź w celu godnego przyjęcia sakramentu małżeństwa (Na początku
          spowiedzi powiedzieć iż jest to druga spowiedź przedślubna).
        </p>
        <h3>Świadek ślubu</h3>
        <p>
          Do spisania aktu ślubu potrzebne są dane świadków (imię i nazwisko,
          wiek, wyznanie, adres zamieszkania). Godną rzeczą jest, aby ci, którzy
          zostali wybrania na świadków wcześniej odbyli również sakramentalną
          spowiedź, aby w czystości swego serca mogli towarzyszyć tym, przez
          których zostali wybrani i obdarzeni tak ogromnym zaufaniem.
        </p>
      </div>
    </div>
  );
};

export default Slub;
