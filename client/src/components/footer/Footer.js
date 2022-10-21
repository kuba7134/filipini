import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-basic">
        <h1>Parafia Świętej Rodziny</h1>
        <h2>
          w Tomaszowie Mazowieckim
          <br />{" "}
          <span className="navbar-przy">
            przy Kongregacji Oratorium Św. Filipa Neri
          </span>
        </h2>
      </div>
      <div className="footer-contact"></div>
    </div>
  );
};

export default Footer;
