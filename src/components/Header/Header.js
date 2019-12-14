import React from "react";

import "./header.css";

function Header({ text, closeBtn = false, actionMenu = false }) {
    return (
        <header>
            <div className="menu-btn">
                <div></div>
            </div>
            <h1>{ text }</h1>
            <div className={ closeBtn ? "close-btn" : "close-btn none" }>
                <div></div>
            </div>
            <div className={ actionMenu ? "action-menu" : "action-menu none" }>
                <div></div>
            </div>
        </header>
    )
}

export default Header;