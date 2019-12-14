import React from "react";

import "./search.css";
import searchIcon from "../../img/search.svg"

function Search() {
    return (
        <div className="search">
            <input placeholder="Search a contact"></input>
            <button><img src={ searchIcon } alt="crwcwv"></img></button>
        </div>
    )
}

export default Search;