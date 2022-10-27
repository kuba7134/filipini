import React from 'react'
import "./nabozenstwa.css"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Nabozenstwa = () => {
    return (
        <motion.div className='nabozenstwa'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            <div className="nabozenstwa-header header-page">
                <h1>Nabożeństwa</h1>
            </div>
            <div className='nabozenstwa-content'>
                <ul>
                    <li><h4>Różaniec w intencji Kółek różańcowych (nabożeństwo eucharystyczne)</h4>
                        <p>1-sza niedziela miesiąca - 17:30</p></li>
                    <li><h4>Nabożeństwo do Matki Bożej rozwiązującej węzły</h4>
                        <p>1-szy poniedziałek miesiąca (od października do czerwca)</p></li>
                    <li><h4>Wystawienie i modlitwa w intencji powołań kapłańskich, zakonnych i misyjnych</h4>
                        <p>1-szy czwartek miesiąca - po Mszy wieczorne</p></li>
                    <li><h4>Godzinna adoracja Najświętszego Sakramentu zakończona Apelem Jasnogórskim</h4>
                        <p>W każdy piątek po Mszy św. wieczornej</p></li>
                    <li><h4>Uwielbienie Najśw. Serca Pana Jezusa, wystawienie i litania</h4>
                        <p>1-szy piątek miesiąca po Mszy wieczornej</p></li>
                    <li><h4>Nabożeństwo fatimskie (wystawienie i różaniec)</h4>
                        <p>13-ty dzień miesiąca (od maja do października) 17:30</p></li>
                    <li><h4>Gorzkie żale, nabożeństwo eucharystyczne</h4>
                        <p>Niedziele Wielkiego Postu 17:30</p></li>
                    <li><h4>Majowe i czerwcowe nabożeństwo eucharystyczne</h4>
                        <p>Maj i Czerwiec 17:30</p></li>
                    <li><h4>Różaniec dla dzieci</h4>
                        <p>Październik 16:30</p></li>
                    <li><h4>Różaniec dla wszystkich</h4>
                        <p>Październik 17:30</p></li>
                    <li><h4>Nabożeństwo eucharystyczne</h4>
                        <p>24-25-26 maja - Nabożeństwo 40-to godzinne
                            (Triduum przed Uroczystością Św. Filipa Neri)</p>
                    </li>
                </ul>











            </div>
        </motion.div>
    )
}

export default Nabozenstwa