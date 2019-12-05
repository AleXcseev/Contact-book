import React from "react";

import "./avatar.css"

function Avatar({ image, big = false }) {
    return (
        <div className={ big ? "avatar big" : "avatar" }>
            <img src={ image } alt=""></img>
        </div>
    )
}

export default Avatar;