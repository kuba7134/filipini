import "./footer.css";
import { BsFillTelephoneFill, BsInstagram, BsFacebook } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="footer">
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
          <a href="https://goo.gl/maps/ichHV2LVnGVfmmpR6" target="blank"><SiGooglemaps /></a>
          <p>ul. Niska 81</p>
          <p>Tomaszów Mazowiecki</p>
        </div>
        <div className="footer-contact footer-column">
          <h3>Kontakt</h3>
          <div className="footer-phone-number">
            <a href="tel:501815508">
              <BsFillTelephoneFill /></a>
            <a href="tel:501815508">
              <p>501 815 508</p>
            </a>
          </div>
        </div>
        <div className="footer-media footer-column">
          <h3>Media</h3>
          <div className="footer-media-box">
            <a href="https://www.instagram.com/przystandwunastu/" target="blank"><BsInstagram /></a>
            <a href="https://www.facebook.com/FilipiniTomaszow" target="blank"><BsFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
