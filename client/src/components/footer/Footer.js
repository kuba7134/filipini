import React from "react";
import "./footer.css";
import maps from "./resources/maps.png";
import { BsFillTelephoneFill, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-basic">
        <h2>Parafia Świętej Rodziny</h2>
        <h3>
          w Tomaszowie Mazowieckim
          <br />
          <span className="navbar-przy">
            przy Kongregacji Oratorium Św. Filipa Neri
          </span>
        </h3>
      </div>
      <div className="footer-container">
        <div className="footer-address footer-column">
          <h3>Adres</h3>
          <SiGooglemaps />
          <p>ul. Niska 81</p>
          <p>Tomaszów Mazowiecki</p>
        </div>
        <div className="footer-contact footer-column">
          <h3>Kontakt</h3>
          <div className="footer-phone-number">
            <BsFillTelephoneFill />
            <p>501 815 508</p>
          </div>
        </div>
        <div className="footer-media footer-column">
          <h3>Media</h3>
          <div className="footer-media-box">
            <BsInstagram />
            <BsFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
