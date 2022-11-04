import "./footer.css";
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { IoIosMail, IoIosCopy } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  const copyNumber = () => {
    navigator.clipboard
      .writeText("91124017181111000010981843")
      .then(() => {
        alert("Skopiowano numer rachunko bankowego.");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

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
          <a
            href="https://goo.gl/maps/ichHV2LVnGVfmmpR6"
            target="blank"
          >
            <SiGooglemaps />
            <p className="text-no-wrap">ul. św Filipa Neri 1</p>
          </a>
          <p>Tomaszów Mazowiecki</p>
        </div>
        <div className="footer-media footer-column">
          <h3>Media</h3>
          <div className="footer-media-box">
            <a
              href="https://www.instagram.com/przystandwunastu/"
              target="blank"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/FilipiniTomaszow"
              target="blank"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
        <div className="footer-contact footer-column">
          <h3>Kontakt</h3>
          <a href="tel:501815508">
            <BsFillTelephoneFill />
            <p className="text-no-wrap">501 815 508</p>
          </a>
          <a
            className="footer-mail"
            href="mailto:tomaszow-rodziny@archidiecezja.lodz.pl"
          >
            <IoIosMail />
            <p className="email-adress">
              <span>tomaszow&#8209;rodziny</span>
              <span>@archidiecezja.lodz.pl</span>
            </p>
          </a>
        </div>
        <div className="footer-organizacje footer-column">
          <h3>Powiązane organizacje</h3>
          <a
            href="https://www.facebook.com/przedszkolewyspaszkrabow"
            target="blank"
          >
            Przedszkole Wyspa Szkrabów im. św. Filipa Neri
          </a>
          <a href="http://hospicjum-tomaszow.pl/" target="blank">
            Hospicjum Tomaszów Mazowiecki
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100064390315446"
            target="blank"
          >
            Tomaszowska Pielgrzymka Rowerowa na Jasną Górę
          </a>
          <a
            href="https://www.facebook.com/przystandwunastu"
            target="blank"
          >
            Przystań Dwunastu
          </a>
        </div>
      </div>
      <div className="footer-konto">
        <p style={{ fontWeight: 700 }}>Konto:</p>
        <p>Bank Pekao S.A. w Tomaszowie Maz.</p>
        <p className="footer-konto-number" onClick={copyNumber}>
          91 1240 1718 1111 0000 1098 1843 <IoIosCopy />
        </p>
      </div>
    </div>
  );
});

export default Footer;
