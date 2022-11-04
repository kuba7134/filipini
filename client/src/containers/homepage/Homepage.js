import React from "react";
import { motion } from "framer-motion";
import "./homepage.css";
import Tiles from "./tiles/Tiles";
import Slideshow from "./slideshow/Slideshow";
import Content from "./content/Content";
import f400 from "./resources/400.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Homepage = () => {
  return (
    <motion.div
      className="homepage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="homepage-header-container">
        <div className="homepage-header">
          <div className="homepage-img-container">
            <Slideshow />
          </div>
          <Tiles />
        </div>
      </div>
      <div className="homepage-content-container">
        <Content />
        <div className="homepage-content-container-sidebar">
          <img
            src={f400}
            alt="400 - lecie kanonizacji św Filipa Neri"
            className="homepage-content-container-400"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
