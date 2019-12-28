import React from "react";

import "./element-categories.css";

const Element = ({ nameCategory, active }) => {
    return (
        <div className={ active ? "element background" : "element" }><span>{ nameCategory }</span></div>
    )
}

export default Element;