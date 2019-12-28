import React from "react";

import Header from "../Header/Header";
import ContactCard from "../Contact-card/Contact-card";

import "./all-contacts.css";

const AllContacts = () => {
    const listOfContact = [
        {
            "_id": "58a446fcc26aaf13460533bd",
            "name": "Yurii",
            "surname": "Chikhrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        },
        {
            "_id": "58a446fcc26aaf1346533bd",
            "name": "Yusdcsdcw",
            "surname": "Chiksdcshrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        },
        {
            "_id": "58a446fcc26aaf13460533d",
            "name": "Yurscsii",
            "surname": "Cshikhrai",
            "image": "/img/58a446fcc26aaf13460533bd/awerasef.jpg"
        }
    ];

    const contactCards = listOfContact.map(item => {
        const { _id, ...itemProps } = item;
        return <ContactCard key={ _id } { ...itemProps }></ContactCard>
    });

    return (
        <div className="all-contacts">
            <Header text={ "All contacts"}></Header>
            { contactCards }
        </div>
    )
}

export default AllContacts;