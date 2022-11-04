import React from "react";
import "./content.css";
import fneri from "../resources/fneri.png";

const Content = () => {
  return (
    <div className="content">
      <img src={fneri} alt="Filip Neri" />
      <div className="content-hours">
        <div className="content-hours-title">
          <h2>Porządek mszy świętych</h2>
          <div className="title-separator"></div>
        </div>
        <div className="content-hours-lists">
          <ul>
            <h3>Niedziela</h3>
            <li>
              <span className="content-hours-list-span">7:30</span> -
              dla wszystkich
            </li>
            <li>
              <span className="content-hours-list-span">9:00</span> -
              dla wszystkich
            </li>
            <li>
              <span className="content-hours-list-span">11:00</span> -
              dla dzieci
            </li>
            <li>
              <span className="content-hours-list-span">12.30</span> -
              dla wszystkich
            </li>
            <li>
              <span className="content-hours-list-span">18.00</span> -
              dla wszystkich
            </li>
            <li>
              <span className="content-hours-list-span">19.30</span> -
              Msza święta "ostatniej szansy"
            </li>
          </ul>
          <ul>
            <h3>Dni powszednie</h3>
            <li>
              <span className="content-hours-list-span">7:00</span>
            </li>
            <li>
              <span className="content-hours-list-span">18:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
