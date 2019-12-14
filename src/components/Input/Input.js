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
            <label className="text">{ text }<br></br>{ input }</label>
        </div>
    )
}

export default Input;