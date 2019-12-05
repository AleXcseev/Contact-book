import React from "react";

import "./input.css";

function Input ({ text, type }) {
    let input;

    if (type === "textarea") {
        input = <textarea></textarea>
    } else {
        input = <input type={ type }></input>
    }

    return (
        <div className="custom-input">
            <span className="text">{ text }</span>
            { input }
        </div>
    )
}

export default Input;