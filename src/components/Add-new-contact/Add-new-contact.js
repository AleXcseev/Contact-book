import React from "react";

import "./add-new-contact.css";
import Header from "../Header/Header";
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import Button from "../Button/Button";

const AddNewContact = ({name = "Add new contact"}) => {

    return (
        <div className="add-new-contact">
            <Header 
                closeBtn={ true }
                text={ name }
                ></Header>
            <Avatar big={ true }></Avatar>
            <form className="input-block">
                <Input text={ "Name" } type={ "text" }></Input>
                <Input text={ "Surname" } type={ "text" }></Input>
                <Input text={ "Phone" } type={ "number" }></Input>
                <Input text={ "Email" } type={ "mail" }></Input>
                <Input text={ "Burthday" } type={ "date" }></Input>
                <Input text={ "Instagram" } type={ "text" }></Input>
                <Input text={ "Facebook" } type={ "text" }></Input>
                <Input text={ "Information" } type={ "textarea" }></Input>
                <Button text={ "Save" }></Button>
            </form>
        </div> 
    )
}

export default AddNewContact;
