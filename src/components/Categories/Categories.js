import React from "react";

import "./categories.css";
import Element from "../Element-categories/Element-categories";

function Categories () {
    return (
        <div className="categories">
            <h3 className="title">Categories</h3>
            <Element nameCategory={"All contacts"} active={ true }></Element>
            <Element nameCategory={"Family"}></Element>
            <Element nameCategory={"Job"}></Element>
        </div>
    )
}

export default Categories;