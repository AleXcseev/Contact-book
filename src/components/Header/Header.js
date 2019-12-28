import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ({ text, closeBtn = false, actionMenu = false}) => {
    return (
        <header>
            <Link to="/menu">
                <div className="menu-btn">
                    <div></div>
                </div>
            </Link>
            <h1>{ text }</h1>
            <Link to="/all-contacts">
                <div className={ closeBtn ? "close-btn" : "close-btn none" }>
                    <div></div>
                </div>
            </Link>
            <div className={ actionMenu ? "action-menu" : "action-menu none" }>
                <div></div>
            </div>
        </header>
    )
}

export default Header;