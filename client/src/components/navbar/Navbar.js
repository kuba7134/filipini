import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ kontaktRef }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let menuRef = useRef();

  const navigate = useNavigate()

  useEffect(() => {
    let handler = event => {
      if (!menuRef.current?.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const list = (
    <>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/aktualnosci">
          Aktualności
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/ogloszenia">
          Ogłoszenia
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/nabozenstwa">
          Nabożeństwa
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/sakramenty">
          Sakramenty
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/kongregacja">
          Kongregacja
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/wspolnoty">
          Wspólnoty
        </Link>
      </p>
      <p>
        <Link onClick={() => setToggleMenu(false)} to="/parafia">
          Parafia
        </Link>
      </p>
      <p className="navbar-button" onClick={() => {
        setToggleMenu(false)
        kontaktRef.current.scrollIntoView()
      }}>
        Kontakt
      </p>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <Link to="/">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src="/pics/fneri.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div onClick={() => { navigate("/") }} className="navbar-name">
          <h1>Parafia Świętej Rodziny</h1>
          <h2>
            w Tomaszowie Mazowieckim
            <br />{" "}
            <span className="navbar-przy">
              przy Kongregacji Oratorium<br />{" "}
              Św. Filipa Neri
            </span>
          </h2>
        </div>
        <div className="navbar-links-list">{list}</div>
        <div className="navbar-menu">
          {!toggleMenu ? (
            <AiOutlineMenu size={27} onClick={() => setToggleMenu(true)} />
          ) : (
            <AiOutlineMenu className="button-navbar-hidden" size={27} onClick={() => setToggleMenu(false)} />
          )}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                ref={menuRef}
                key="navbar-menu"
                className="navbar-menu-container"
              >
                <AiOutlineClose
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
                {list}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
