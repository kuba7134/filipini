import React from "react";
import "./headerao.css";
import bible from "./resources/bible.png";

const Headerao = props => {
  return (
    <div
      className={
        props.title === "Aktualności"
          ? "headerao header-page headerao-icons"
          : "headerao"
      }
    >
      <h1>{props.title}</h1>
      {props.title === "Aktualności" && (
        <div className="sakramenty-buttons">
          <a href="http://mateusz.pl/czytania/2022/" target="blank">
            <div className="sakramenty-button">
              <img style={{ height: 70 }} src={bible} alt="clock" />
              <p>Słowo Boże na każdy dzień</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Headerao;
