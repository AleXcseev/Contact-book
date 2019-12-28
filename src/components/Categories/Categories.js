import React, { useState } from "react";

import "./categories.css";
import Element from "../Element-categories/Element-categories";
import PhonebookHillel from "../../service/service";

const Categories = () => {

    const [ categories, setCategories ] = useState(null);
    
    const service = new PhonebookHillel();
        

    const getPhonebookCategories = () => {
        service.getCategories()
                .then((res) => {
                setCategories(res);
            })
    }

    getPhonebookCategories();

    const renderCategories = () => {
        let array = null;
        if(categories !== null) {
            array = categories.map((item) => {
                return <Element nameCategory={ item.name } key={ item._id }></Element>
            });
        }; 
        return array;
    }
    return (
        <div className="categories">
            <h3 className="title">Categories</h3>
            { renderCategories() }
        </div>
    )
}

export default Categories;
