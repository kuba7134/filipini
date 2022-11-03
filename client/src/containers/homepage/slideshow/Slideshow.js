import React, { useEffect, useState } from "react";
import "./slideshow.css";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "pics/main.jpg",
  "pics/1.jpg",
  "pics/2.jpg",
  "pics/3.jpg",
  "pics/4.jpg",
  "pics/5.jpg",
  "pics/6.jpg",
  "pics/7.jpg",
  "pics/8.jpg",
  "pics/9.jpg",
  "pics/10.jpg",
  "pics/11.jpg",
  "pics/12.jpg",
];

const Slideshow = () => {
  const nextImg = () => {
    if (src === images.length - 1) {
      return setSrc(0);
    }
    setSrc(src + 1);
  };

  const [src, setSrc] = useState(
    Math.floor(Math.random() * (images.length - 1))
  );

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
        transition={{ ease: "easeOut", duration: 2 }}
        exit={{ x: -300, opacity: 0 }}
      />
    </AnimatePresence>
  );
};

export default Slideshow;
