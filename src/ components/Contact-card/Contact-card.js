import React from "react";

import "./contact-card.css";

function ContactCard (props) {
    return (
        <div className="contact-card">
            <div className="avatar">
                <img src={ props.contact.image } alt=""></img>
            </div>
            <div className="user-card">
                <div>
                    <h3 className="user-card-name">
                        { props.contact.name } { props.contact.surname }
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
