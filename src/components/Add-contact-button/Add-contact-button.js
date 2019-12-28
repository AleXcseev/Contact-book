import React from "react";
import { Link } from "react-router-dom";

import "./add-contact-button.css";

function AddContactButton () {
    return (
        <Link to="/add-new-contact"><div className="add-contact"><div></div>Add contact</div></Link>
    )
}

export default AddContactButton;