import React from "react"

import "./contact-information.css"
import bitmap from "../../img/Bitmap.png";
import Header from "../Header/Header";
import Avatar from "../Avatar/Avatar";

function ContactInformation () {
    return (
        <div className="contact-information">
            <Header actionMenu={ true } text={ "Andy Warhol" }></Header>
            <Avatar big={ true } image={ bitmap }></Avatar>
            <h2 className="name">Andy Warhol</h2>
            <p> American artist and producer 
                who was a leading figure in the visual
                art movement known as pop art.</p>
            <div className="field">
                <span>Phone</span>
                <p className="placeholder">+38 (067) 187 1839 </p>
            </div>
            <div className="field">
                <span>Email</span>
                <p className="placeholder">andy.warhol@gmail.com</p>
            </div>
            <div className="field">
                <span>Birthday</span>
                <p className="placeholder">06/08/1928</p>
            </div>
            <div className="field">
                <span>Instagram</span>
                <p className="placeholder">@andyWorhol</p>
            </div>
        </div>
    )
}

export default ContactInformation;