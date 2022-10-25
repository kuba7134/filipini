import React from "react";
import "./homepage.css";
import Tiles from "./tiles/Tiles";
import Slideshow from "./slideshow/Slideshow";
import Content from "./content/Content";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-header-container">
        <div className="homepage-header">
          <div className="homepage-img-container">
            <Slideshow />
          </div>
          <Tiles />
        </div>
      </div>
      <Content />
    </div>
  );
};

export default Homepage;
