import React from "react";

import "./menu.css";
import bitmap from "../../img/Bitmap.png";
import ContactCard from "../Contact-card/Contact-card";
import Search from "../Search/Search";
import Categories from "../Categories/Categories";
import UpcomingBirthday from "../Upcoming-birthday/Upcoming-birthday";
import AddContactButton from "../Add-contact-button/Add-contact-button";

function Menu () {
    return (
        <div className="menu">
            <div className="menu-header">
                <div className="close-btn">
                    <div></div>
                </div>
                <h2>Contact Book</h2>
            </div>
            <ContactCard name={ "Andy" } surname={ "Warhol" } image={ bitmap }></ContactCard>
            <div className="search-component">
                <Search></Search>
            </div>
            <div className="categories-component">
                <Categories></Categories>
            </div>
            <div className="upcoming">
                <UpcomingBirthday></UpcomingBirthday>
            </div>
            <div className="footer">
                <AddContactButton></AddContactButton>
            </div>
        </div>
    )
}

export default Menu;