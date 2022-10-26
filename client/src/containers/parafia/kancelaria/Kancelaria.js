import React from 'react'
import "./kancelaria.css"
import kancelariaimg from "../resources/kancelaria.jpg"

const kancelaria = () => {
    return (
        <div className="kancelaria">
            <img src={kancelariaimg} alt="kancelaria" loading="lazy" />
            <div className="kancelaria-hours">
                <h3>Kancelaria czynna:</h3>
                <br />
                <h3>Poniedziałek - piątkek:</h3>
                <p>8:30 - 10:00</p>
                <br />
                <h3>W sobotę</h3>
                <p>10:00 - 12:00</p>
                <br />
                <p>W niedziele i święta kancelaria nieczynna.</p>
                <p>W sprawach nagłych o każdej porze.</p>
                <br />
                <h3>Konto:</h3>
                <p>Bank Pekao S.A. w Tomaszowie Maz.</p>
                <p>91 1240 1718 1111 0000 1098 1843</p>
            </div>
        </div>
    )
}

export default kancelaria