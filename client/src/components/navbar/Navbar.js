import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  let menuRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    let handler = event => {
      if (!menuRef.current?.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    const changeBackground = () => {
      if (window.scrollY >= 0.2 * window.innerHeight) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", changeBackground);
    };
  });

  const list = (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/aktualnosci">
          <p>Aktualności</p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/ogloszenia">
          <p>Ogłoszenia</p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/nabozenstwa">
          <p>Nabożeństwa</p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/sakramenty">
          <p>Sakramenty</p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/kongregacja">
          <p>Kongregacja </p>
        </Link>
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/wspolnoty">
          <p> Wspólnoty </p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/parafia">
          <p> Parafia </p>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link onClick={() => setToggleMenu(false)} to="/kontakt">
          <p> Kontakt</p>
        </Link>
      </motion.div>
    </>
  );

  return (
    <div
      className={
        navbarBg ? "navbar-white navbar" : "navbar-transparent navbar"
      }
    >
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
        <div
          onClick={() => {
            navigate("/");
          }}
          className="navbar-name"
        >
          <h1>Parafia Świętej Rodziny</h1>
          <h2>
            w Tomaszowie Mazowieckim
            <br />{" "}
            <span className="navbar-przy">
              przy Kongregacji Oratorium
              <span className="text-no-wrap"> Św. Filipa Neri</span>
            </span>
          </h2>
        </div>
        <div className="navbar-links-list">{list}</div>
        <div className="navbar-menu">
          {!toggleMenu ? (
            <AiOutlineMenu
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          ) : (
            <AiOutlineMenu
              className="button-navbar-hidden"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          )}
          <AnimatePresence>
            {toggleMenu && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                ref={menuRef}
                key="navbar-menu"
                className="navbar-menu-container"
              >
                <div className="navbar-menu-svg-wrapper">
                  {" "}
                  <AiOutlineClose
                    size={27}
                    onClick={() => setToggleMenu(false)}
                  />
                </div>
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
