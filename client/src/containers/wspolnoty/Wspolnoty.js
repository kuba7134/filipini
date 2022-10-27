import React from "react";
import "./wspolnoty.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const Wspolnoty = () => {
  return <motion.div className="wspolnoty"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="hidden">
    <div className="header-page wspolnoty-header">
      <h1>Wspólnoty</h1>
    </div>
  </motion.div>
};

export default Wspolnoty;
