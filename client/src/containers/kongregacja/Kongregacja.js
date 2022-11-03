import React from 'react'
import "./kongregacja.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Oratorium from "./oratorium/Oratorium"
import FilipNeri from "./filipNeri/FilipNeri"
import fneri from "./resources/fneri.jpg"
import herb from "./resources/herb-small.png"
import violin from "./resources/violin.png"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Kongregacja = () => {
    const [kongregacja, setKongregacja] = useState("filipNeri");
    const renderSwitch = param => {
        switch (param) {
            case "oratorium":
                return <Oratorium key="oratorium" />;
            case "filipNeri":
                return <FilipNeri key="filip" />;
            default:
                return
        }
    };

    return <motion.div className="kongregacja"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden">
        <div className="header-page kongregacja-header">
            <h1>Kongregacja</h1>
            <div className="sakramenty-buttons">
                <div
                    onClick={() => {
                        setKongregacja("filipNeri");
                    }}
                    className="sakramenty-button"
                >
                    <img id="kongregacja-fneri" src={fneri} alt="Filip Neri" />
                    <p>Filip Neri</p>
                </div>
                <div
                    onClick={() => {
                        setKongregacja("oratorium");
                    }}
                    className="sakramenty-button"
                >
                    <img src={violin} alt="violin" />
                    <p>Oratorium</p>
                </div>
                <a href="https://filipini.pl/" target="blank">
                    <div
                        className="sakramenty-button"
                    >
                        <img style={{ height: 70 }} src={herb} alt="clock" />
                        <p>filipini.pl</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="parafia-container">
            <AnimatePresence mode="wait">{renderSwitch(kongregacja)}</AnimatePresence>
        </div>
    </motion.div>
}

export default Kongregacja