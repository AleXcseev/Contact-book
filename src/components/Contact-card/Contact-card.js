import React from "react";


import "./contact-card.css";
import Avatar from "../Avatar/Avatar";

const ContactCard  = ({ name, surname, image }) => {
    return (
        <div className="contact-card">
            <Avatar image={ image }></Avatar>
            <div className="user-card">
                <div>
                    <h3 className="user-card-name">
                        { name } { surname }
                    </h3>
                    <span className="user-card-text">Some text</span>
                </div>
            </div>
            <div className="action-menu">
                <div></div>
            </div>
        </div>
    )
}

export default ContactCard;
