import React from "react";

import "./upcoming-birthday.css";
import ContactBirthday from "../Contact-birthday/Contact-birthday";

function UpcomingBirthday () {
    return (
        <div className="upcoming-birthday">
            <h3 className="title">Upcoming birthday</h3>
            <ContactBirthday></ContactBirthday>
            <ContactBirthday></ContactBirthday>
        </div>
    )
}

export default UpcomingBirthday;