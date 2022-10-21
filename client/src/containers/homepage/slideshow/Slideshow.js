import React, { useEffect, useState } from "react";
import "./slideshow.css";
import { AnimatePresence, motion } from "framer-motion";

const images = ["pics/main.jpg", "pics/main2.jpg"];

const Slideshow = () => {
  const nextImg = () => {
    if (src === images.length - 1) {
      return setSrc(0);
    }
    setSrc(src + 1);
  };

  const [src, setSrc] = useState(0);

  useEffect(() => {
    console.log(images[src]);
    const imgInterval = setInterval(nextImg, 5000);
    return () => clearInterval(imgInterval);
  });

  return (
    <AnimatePresence>
      <motion.img
        key={images[src]}
        src={images[src]}
        className="homepage-header-img"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  );
};

export default Slideshow;
