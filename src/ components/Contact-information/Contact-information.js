import React from "react"

import "./contact-information.css"
import Header from "../Header/Header";
import Avatar from "../Avatar/Avatar";

function ContactInformation () {
    return (
        <div className="contact-information">
            <Header actionMenu={ true } text={ "Andy Warhol" }></Header>
            <Avatar big={ true }></Avatar>
            <h2 className="name">Andy Warhol</h2>
            <div className="information">
                <p> American artist and producer 
                    who was a leading figure in the visual
                    art movement known as pop art.</p>
            </div>
        </div>
    )
}

export default ContactInformation;