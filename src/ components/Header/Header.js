import React from "react";

import "./header.css";

function Header(props) {
    return (
        <header>
            <div className="menu-btn">
                <div></div>
            </div>
            <h1>All contacts</h1>
            <div className={ props.closeBtn ? "close-btn" : "close-btn none" }>
                <div></div>
            </div>
            <div className={ props.actionMenu ? "action-menu" : "action-menu none" }>
                <div></div>
            </div>
        </header>
    )
}

export default Header;