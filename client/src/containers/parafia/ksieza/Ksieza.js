import React from 'react'
import "./ksieza.css"
import chirk from "../resources/chirk.jpg"
import bogusz from "../resources/bogusz.jpg"
import porczynski from "../resources/porczynski.jpg"
import stepien from "../resources/stepien.jpg"
import wojtunik from "../resources/wojtunik.jpg"

const ksieza = () => {
    return (
        <div className="ksieza">
            <div className="ksieza-single">
                <img src={wojtunik} alt="ks. Wacław Wojtunik" />
                <h3>ks. Wacław Wojtunik COr</h3>
            </div>
            <div className="ksieza-single">
                <img src={porczynski} alt="ks. Marek Porczyński" />
                <h3>ks. Marek Porczyński COr</h3>
            </div>
            <div className="ksieza-single">
                <img src={bogusz} alt="ks. Sławomir Bogusz" />
                <h3>ks. Sławomir Bogusz COr</h3>
            </div>
            <div className="ksieza-single">
                <img src={chirk} alt="ks. Grzegorz Chirk" />
                <h3>ks. Grzegorz Chirk COr<br /> - Superior i Proboszcz</h3>
            </div>
            <div className="ksieza-single">
                <img src={stepien} alt="ks. Piotr Stępień" />
                <h3>ks. Piotr Stępień COr</h3>
            </div>
        </div>
    )
}

export default ksieza