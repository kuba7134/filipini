import React from "react";
import "./kancelaria.css";
import kancelariaimg from "../resources/kancelaria.jpg";
import { motion } from "framer-motion";
import { IoIosCopy } from "react-icons/io";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const copyNumber = () => {
  navigator.clipboard
    .writeText("91124017181111000010981843")
    .then(() => {
      alert("Skopiowano numer rachunku bankowego.");
    })
    .catch(() => {
      alert("something went wrong");
    });
};

const kancelaria = () => {
  return (
    <motion.div
      className="kancelaria"
      key="kancelaria"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <img src={kancelariaimg} alt="kancelaria" loading="lazy" />
      <div className="kancelaria-hours">
        <h2>Kancelaria czynna:</h2>
        <h3>Poniedziałek - piątek:</h3>
        <p>8:30 - 10:00</p>
        <p>16:00 - 17:30</p>
        <br />
        <h3>W sobotę</h3>
        <p>8:30 - 10:00</p>
        <br />
        <h3>W niedziele i święta kancelaria nieczynna</h3>
        <br />
        <h3>W sprawach nagłych o każdej porze</h3>
        <br />
        <div className="kancelaria-konto">
          <p style={{ fontWeight: 700 }}>Konto:</p>
          <p>Bank Pekao S.A. w Tomaszowie Maz.</p>
          <p className="footer-konto-number" onClick={copyNumber}>
            91 1240 1718 1111 0000 1098 1843 <IoIosCopy />
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default kancelaria;
